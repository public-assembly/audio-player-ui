import { ImVolumeMedium, ImVolumeMute } from "react-icons/im";

interface VolControlsProps {
  muted: boolean;
  toggleMute: () => void;
}

export const VolControls = ({ muted, toggleMute }: VolControlsProps) => {
  return (
    <>
      <button
        onClick={() => toggleMute()}
        className={`${!muted ? "inline-block" : "hidden"}`}
        aria-label="volume"
      >
        <ImVolumeMedium className="w-6 h-6" />
      </button>
      <button
        onClick={toggleMute}
        className={muted ? "inline-block" : "hidden"}
        aria-label="muted"
      >
        <ImVolumeMute className="w-6 h-6" />
      </button>
    </>
  );
};
