import { BiSkipNext } from "react-icons/bi";
import { usePlayerContext } from "../../../../context/AudioPlayerContext";

export const Next = ({ nextSong }: any) => {
  const { playlist } = usePlayerContext();
  if (playlist.length <= 1) {
    return null;
  }
  return (
    <button onClick={nextSong} className="pa-audio-player__next">
      <BiSkipNext className="pa-audio-player__next-icon w-6 h-6" />
    </button>
  );
};
