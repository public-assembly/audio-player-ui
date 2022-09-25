import { PlayToggle } from "../../controls/PlayToggle/PlayToggle";
import { ProgressBar } from "../../controls/ProgressBar/ProgressBar";
import { Prev } from "../../controls/PrevNext/Prev";
import { Next } from "../../controls/PrevNext/Next";

interface ControlsContainerProps {
  pausePlayHandler: () => void;
  playing: boolean;
  playHandler: () => void;
  pauseHandler: () => void;
  duration: number;
  progress: number;
  setProgress: (progress: number) => void;
  isMuted: boolean;
  toggleMute: () => void;
  handleProgress: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextSong: () => void;
  prevSong: () => void;
}

export const ControlsContainer = ({
  pausePlayHandler,
  playing,
  playHandler,
  pauseHandler,
  duration,
  progress,
  handleProgress,
  nextSong,
  prevSong,
}: ControlsContainerProps) => {
  return (
    <div className="col-span-9">
      <div className="flex justify-between items-center w-[100%]">
        <div className="flex items-center gap-2">
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
      </div>
    </div>
  );
};
