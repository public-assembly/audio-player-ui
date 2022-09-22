export const VolSlider = ({ muted, toggleMute }: any) => {
  const changVol = (e: any) => {
    if (e.target.value === "0") {
      toggleMute();
    }
  };
  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.01}
      value={muted ? 0 : 0.5}
      className="cursor-pointer w-20"
      onChange={(e) => changVol(Number(e.target.value))}
    />
  );
};
