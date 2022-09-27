import { PlayToggle } from "../../controls/PlayToggle/PlayToggle";
import { ProgressBar } from "../../controls/ProgressBar/ProgressBar";
import { Prev } from "../../controls/PrevNext/Prev";
import { Next } from "../../controls/PrevNext/Next";
import { VolControls } from "../../controls/VolControls";
import { VolSlider } from "../../controls/VolSlider";
import { usePlayerContext } from "../../../../context/AudioPlayerContext";

export const ControlsContainer = () => {
  const {
    pausePlayHandler,
    playing,
    playHandler,
    pauseHandler,
    duration,
    progress,
    isMuted,
    toggleMute,
    handleProgress,
    nextSong,
    prevSong,
    volume,
    handleVolume,
  } = usePlayerContext();
  return (
    <div className="pa-audio-player__controls col-span-6 lg:col-span-10">
      <div className="pa-audio-player__controls-wrapper flex justify-between items-center w-[100%]">
        <div className="pa-audio-player__controls-play-pause-prev-next flex items-center gap-2">
          <Prev prevSong={prevSong} />
          <PlayToggle
            pausePlayHandler={pausePlayHandler}
            playing={playing}
            playHandler={playHandler}
            pauseHandler={pauseHandler}
          />
          <Next nextSong={nextSong} />
        </div>
        <ProgressBar
          duration={duration}
          progress={progress}
          handleProgress={handleProgress}
        />
        <VolControls isMuted={isMuted} toggleMute={toggleMute} />
        <VolSlider
          isMuted={isMuted}
          volume={volume}
          handleVolume={handleVolume}
        />
      </div>
    </div>
  );
};
