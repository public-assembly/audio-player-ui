import { BiSkipPrevious } from "react-icons/bi";

export const Prev = ({ prevSong }: any) => {
  return (
    <button onClick={prevSong}>
      <BiSkipPrevious className="w-6 h-6" />
    </button>
  );
};
