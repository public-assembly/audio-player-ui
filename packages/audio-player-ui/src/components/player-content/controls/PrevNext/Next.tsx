import { BiSkipNext } from "react-icons/bi";

export const Next = ({ nextSong }: any) => {
  return (
    <button onClick={nextSong}>
      <BiSkipNext className="w-6 h-6" />
    </button>
  );
};
