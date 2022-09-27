import { ImVolumeMedium, ImVolumeMute } from "react-icons/im";

interface VolControlsProps {
  isMuted: boolean;
  toggleMute: () => void;
}
export const VolControls = ({ isMuted, toggleMute }: VolControlsProps) => {
  return (
    <>
      <button
        onClick={() => toggleMute()}
        className={`pa-audio-player__volume-controls-volume ${!isMuted ? "inline-block" : "hidden"}`}
        aria-label="volume"
      >
        <ImVolumeMedium className="pa-audio-player__volume-controls-volume-icon w-6 h-6" />
      </button>
      <button
        onClick={toggleMute}
        className={`pa-audio-player__volume-controls-muted ${isMuted ? "inline-block" : "hidden"}`}
        aria-label="muted"
      >
        <ImVolumeMute className="pa-audio-player__volume-controls-muted-icon w-6 h-6" />
      </button>
    </>
  );
};
