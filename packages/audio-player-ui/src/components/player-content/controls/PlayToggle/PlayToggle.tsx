import { GrPlayFill, GrPauseFill } from "react-icons/gr";
import useAudioPlayer from "../../../../hooks/useAudioPlayer";

export const PlayToggle = () => {
  const { togglePlay, playing } = useAudioPlayer();
  return (
    <>
      <button
        onClick={togglePlay}
        className={!playing ? "inline-block" : "hidden"}
      >
        <GrPlayFill className="w-6 h-6" />
      </button>
      <button
        onClick={togglePlay}
        className={playing ? "inline-block" : "hidden"}
      >
        <GrPauseFill className="w-6 h-6" />
      </button>
    </>
  );
};
