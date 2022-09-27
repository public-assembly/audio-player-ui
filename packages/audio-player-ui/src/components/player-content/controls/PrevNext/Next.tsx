import { BiSkipNext } from "react-icons/bi";
import { usePlayerContext } from "../../../../context/AudioPlayerContext";

export const Next = ({ nextSong }: any) => {
  const { playlist } = usePlayerContext();
  if (playlist.length <= 1) {
    return null;
  }
  return (
    <button onClick={nextSong}>
      <BiSkipNext className="w-6 h-6" />
    </button>
  );
};
