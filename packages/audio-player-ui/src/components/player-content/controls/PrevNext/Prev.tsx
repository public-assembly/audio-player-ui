import { BiSkipPrevious } from "react-icons/bi";
import { usePlayerContext } from "../../../../context/AudioPlayerContext";

export const Prev = ({ prevSong }: any) => {
  const { playlist } = usePlayerContext();
  if (playlist.length <= 1) {
    return null;
  }
  return (
    <button onClick={prevSong}>
      <BiSkipPrevious className="w-6 h-6" />
    </button>
  );
};
