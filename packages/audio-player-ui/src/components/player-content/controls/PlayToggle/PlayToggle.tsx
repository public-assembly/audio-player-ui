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
        className={`pa-audio-player__play-button ${!playing ? "inline-block" : "hidden"}`}
      >
        <GrPlayFill className="pa-audio-player__play-icon w-6 h-6" />
      </button>
      <button
        onClick={pausePlayHandler}
        className={`pa-audio-player__pause-button ${playing ? "inline-block" : "hidden"}`}
      >
        <GrPauseFill className="pa-audio-player__pause-icon w-6 h-6" />
      </button>
    </>
  );
};
