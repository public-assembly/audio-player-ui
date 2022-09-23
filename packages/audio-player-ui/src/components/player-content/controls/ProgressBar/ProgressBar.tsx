import useAudioPlayer from "../../../../hooks/useAudioPlayer";

export const ProgressBar = () => {
  const { curTime, duration, setClickedTime } = useAudioPlayer();
  const timeLeft = () => {
    let mins: any = Math.floor((duration - curTime) / 60);
    let secs: any = Math.floor((duration - curTime) % 60);
    if (mins < 10) mins = `0${mins}`;
    if (secs < 10) secs = `0${secs}`;
    return `${mins}:${secs}`;
  };
  console.log(timeLeft());
  function handleTimeDrag(e: any) {
    setClickedTime(e);
    const updateTimeOnMove = (eMove: any) => {
      setClickedTime(eMove);
    };

    document.addEventListener("mousemove", updateTimeOnMove);
    document.addEventListener("touchmove", updateTimeOnMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
    document.addEventListener("touchend", () => {
      document.removeEventListener("touchmove", updateTimeOnMove);
    });
  }
  return (
    <span className="w-full px-6 flex items-center gap-4 mx-auto">
      <input
        type="range"
        step={0.01}
        className="w-[90%] cursor-pointer"
        min={0}
        max={Math.floor(duration)}
        value={curTime}
        onChange={(e) => handleTimeDrag(e.target.value)}
      />
      <span>{timeLeft()}</span>
    </span>
  );
};
