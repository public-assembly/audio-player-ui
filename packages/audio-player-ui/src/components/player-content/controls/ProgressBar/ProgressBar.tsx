interface ProgressBarProps {
  duration: number;
  progress: number;
  handleProgress: Function;
}

export const ProgressBar = ({
  duration,
  progress,
  handleProgress,
}: ProgressBarProps) => {
  const timeLeft = () => {
    let mins: any = Math.floor((duration - progress) / 60);
    let secs: any = Math.floor((duration - progress) % 60);
    if (mins < 10) mins = `0${mins}`;
    if (secs < 10) secs = `0${secs}`;
    return `${mins}:${secs}`;
  };

  return (
    <span className="w-full px-6 flex items-center gap-4 mx-auto">
      <input
        type="range"
        className="w-[90%] cursor-pointer"
        min="0"
        value={progress}
        max={Math.floor(duration)}
        onChange={(e: any) => handleProgress(e as any)}
      />
      <span>{timeLeft()}</span>
    </span>
  );
};
