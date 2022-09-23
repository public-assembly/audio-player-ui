import { PlayToggle } from "../../controls/PlayToggle/PlayToggle";
import { ProgressBar } from "../../controls/ProgressBar/ProgressBar";
import { VolControls } from "../../controls/VolControls/VolControls";

export const ControlsContainer = () => {
  return (
    <div className="flex justify-between items-center">
      <PlayToggle />
      <ProgressBar />
      <VolControls />
    </div>
  );
};
