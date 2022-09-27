interface VolControlsProps {
  isMuted: boolean;
  volume: number;
  handleVolume: Function;
}

export const VolSlider = ({ volume, handleVolume }: VolControlsProps) => {
  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.01}
      value={volume}
      className="cursor-pointer w-20 hidden sm:block"
      onChange={(e) => handleVolume(e as any)}
    />
  );
};
