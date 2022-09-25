import { PlayerWrapper } from "./player-content/wrappers/PlayerWrapper/PlayerWrapper";
import { ControlsContainer } from "./player-content/wrappers/controls-wrapper/ControlsContainer";
import { AudioPlayerDisplayInfo } from "./player-content/wrappers/InfoContainer/InfoContainer";
import { VolSlider } from "./player-content/controls/VolSlider/VolSlider";
import { useEffect, useRef, useState } from "react";
import { useAudioPlayer } from "../hooks/useAudioPlayer";
import { VolControls } from "./player-content/controls/VolControls";

type NFT = {
  id: string;
  artist: string;
  title: string;
  image: string;
  audioSrc: string;
};

interface AudioPlayerProps {
  nft: NFT;
  playlist: NFT[];
}
export function AudioPlayer({ nft, playlist }: AudioPlayerProps) {
  const [currentTrack, setCurrentTrack] = useState(playlist[0]);
  const { id, artist, title, image, audioSrc } = nft;
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setCurrentTrack(nft);
  }, [nft]);

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
    nextSong,
    prevSong,
    onEndHandler,
  } = useAudioPlayer(audioRef, playlist, currentTrack, setCurrentTrack);

  return (
    <PlayerWrapper>
      <audio
        ref={audioRef}
        src={currentTrack ? currentTrack.audioSrc : audioSrc}
        loop={false}
        preload="auto"
        autoPlay={true}
        muted={isMuted}
        playsInline
        onPlay={playHandler}
        onPause={pauseHandler}
        onTimeUpdate={timeUpdateHandler}
        onLoadedData={loadedHandler}
        onEnded={onEndHandler}
      >
        Your browser does not support the <code>audio</code> element.
      </audio>
      <AudioPlayerDisplayInfo
        artistName={currentTrack ? currentTrack.artist : artist}
        trackName={currentTrack ? currentTrack.title : title}
      />
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
        nextSong={nextSong}
        prevSong={prevSong}
      />
      <div className="col-span-1">
        <div className="flex items-center">
          <VolControls isMuted={isMuted} toggleMute={toggleMute} />
          <VolSlider
            isMuted={isMuted}
            volume={volume}
            handleVolume={handleVolume}
          />
        </div>
      </div>
    </PlayerWrapper>
  );
}
