import { usePlayerContext } from "../../../../context/AudioPlayerContext";

export const AudioPlayerDisplayInfo = ({}) => {
  const { currentTrack } = usePlayerContext();
  const { artist, title } = currentTrack;
  return (
    <div className="col-span-2 ">
      <div className="flex items-center">
        <span className="">{artist}</span>
        <span className="mx-1">-</span>
        <span className="truncate">{title}</span>
      </div>
    </div>
  );
};
