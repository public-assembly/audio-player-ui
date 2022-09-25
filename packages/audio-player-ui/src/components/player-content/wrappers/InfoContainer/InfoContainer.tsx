interface AudioPlayerDisplayInfoProps {
  artistName: string;
  trackName: string;
}

export const AudioPlayerDisplayInfo = ({
  artistName,
  trackName,
}: AudioPlayerDisplayInfoProps) => {
  return (
    <div className="col-span-2 ">
      <div className="flex items-center">
        <span className="">{artistName}</span>
        <span className="mx-1">-</span>
        <span className="truncate">{trackName}</span>
      </div>
    </div>
  );
};
