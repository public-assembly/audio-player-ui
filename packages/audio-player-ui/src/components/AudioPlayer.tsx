import { PlayerWrapper } from "./player-content/wrappers/PlayerWrapper/PlayerWrapper";
import { ControlsContainer } from "./player-content/wrappers/controls-wrapper/ControlsContainer";
import { AudioPlayerDisplayInfo } from "./player-content/wrappers/InfoContainer/InfoContainer";
import { VolSlider } from "./player-content/controls/VolSlider/VolSlider";
import { useRef } from "react";
import { useAudioPlayer } from "../hooks/useAudioPlayer";

interface AudioPlayerProps {
  id: string;
  artist: string;
  title: string;
  image: string;
  audioSrc: string;
}
export function AudioPlayer({
  // id,
  artist,
  title,
  image,
  audioSrc,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const {
    pausePlayHandler,
    playHandler,
    pauseHandler,
    loadedHandler,
    timeUpdateHandler,
    toggleMute,
    isMuted,
    playing,
    handleProgress,
    duration,
    progress,
    setProgress,
    volume,
    handleVolume,
  } = useAudioPlayer(audioRef);
  return (
    <PlayerWrapper>
      <audio
        ref={audioRef}
        src={audioSrc}
        loop={false}
        preload="auto"
        autoPlay={true}
        muted={isMuted}
        playsInline
        onPlay={playHandler}
        onPause={pauseHandler}
        onTimeUpdate={timeUpdateHandler}
        onLoadedData={loadedHandler}
      >
        Your browser does not support the <code>audio</code> element.
      </audio>

      <ControlsContainer
        pausePlayHandler={pausePlayHandler}
        playing={playing}
        playHandler={playHandler}
        pauseHandler={pauseHandler}
        duration={duration}
        progress={progress}
        setProgress={setProgress}
        isMuted={isMuted}
        toggleMute={toggleMute}
        handleProgress={handleProgress}
      />
      <div className="flex justify-between items-center">
        <AudioPlayerDisplayInfo artistName={artist} trackName={title} />
        <VolSlider
          isMuted={isMuted}
          volume={volume}
          handleVolume={handleVolume}
        />
      </div>
    </PlayerWrapper>
  );
}
