import { PlayToggle } from "../../controls/PlayToggle/PlayToggle";
import { ProgressBar } from "../../controls/ProgressBar/ProgressBar";
import { VolControls } from "../../controls/VolControls/VolControls";

export const ControlsContainer = ({
  playing,
  setPlaying,
  duration,
  currentTime,
  setClickedTime,
  muted,
  toggleMute,
}: any) => {
  return (
    <div className="flex justify-between items-center">
      <PlayToggle playing={playing} setPlaying={setPlaying} />
      <ProgressBar
        duration={duration}
        currentTime={currentTime}
        setClickedTime={setClickedTime}
      />
      <VolControls muted={muted} toggleMute={toggleMute} />
    </div>
  );
};
