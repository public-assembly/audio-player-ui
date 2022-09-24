import { GrPlayFill, GrPauseFill } from "react-icons/gr";

interface PlayToggleProps {
  pausePlayHandler: () => void;
  playing: boolean;
  playHandler?: () => void;
  pauseHandler?: () => void;
}

export const PlayToggle = ({ pausePlayHandler, playing }: PlayToggleProps) => {
  return (
    <>
      <button
        onClick={pausePlayHandler}
        className={!playing ? "inline-block" : "hidden"}
      >
        <GrPlayFill className="w-6 h-6" />
      </button>
      <button
        onClick={pausePlayHandler}
        className={playing ? "inline-block" : "hidden"}
      >
        <GrPauseFill className="w-6 h-6" />
      </button>
    </>
  );
};
