import { PlayToggle } from "../../controls/PlayToggle/PlayToggle";
import { ProgressBar } from "../../controls/ProgressBar/ProgressBar";
import { VolControls } from "../../controls/VolControls/VolControls";

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
}

export const ControlsContainer = ({
  pausePlayHandler,
  playing,
  playHandler,
  pauseHandler,
  duration,
  progress,
  isMuted,
  toggleMute,
  handleProgress,
}: ControlsContainerProps) => {
  return (
    <div className="flex justify-between items-center">
      <PlayToggle
        pausePlayHandler={pausePlayHandler}
        playing={playing}
        playHandler={playHandler}
        pauseHandler={pauseHandler}
      />
      <ProgressBar
        duration={duration}
        progress={progress}
        handleProgress={handleProgress}
      />
      <VolControls isMuted={isMuted} toggleMute={toggleMute} />
    </div>
  );
};
