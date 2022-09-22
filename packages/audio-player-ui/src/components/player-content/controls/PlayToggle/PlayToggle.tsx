import { GrPlayFill, GrPauseFill } from "react-icons/gr";

export const PlayToggle = ({ playing, setPlaying }: any) => {
  return (
    <>
      <button
        onClick={() => setPlaying(!playing)}
        className={!playing ? "inline-block" : "hidden"}
      >
        <GrPlayFill className="w-6 h-6" />
      </button>
      <button
        onClick={() => setPlaying(!playing)}
        className={playing ? "inline-block" : "hidden"}
      >
        <GrPauseFill className="w-6 h-6" />
      </button>
    </>
  );
};
