import { ImVolumeMedium, ImVolumeMute } from "react-icons/im";
import useAudioPlayer from "../../../../hooks/useAudioPlayer";

export const VolControls = () => {
  const { muted, toggleMute } = useAudioPlayer();
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
