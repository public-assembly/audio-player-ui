// @ts-ignore:next-line
import * as React from 'react'

interface ProgressBarProps {
  duration: number
  progress: number
  handleProgress: Function
}

export const ProgressBar = ({ duration, progress, handleProgress }: ProgressBarProps) => {
  const timeLeft = () => {
    let mins: any = Math.floor((duration - progress) / 60)
    let secs: any = Math.floor((duration - progress) % 60)
    if (mins < 10) mins = `0${mins}`
    if (secs < 10) secs = `0${secs}`
    return `${mins}:${secs}`
  }

  return (
    <span className="pa-audio-player__progress-wrapper flex w-full items-center gap-4 px-6">
      <input
        type="range"
        className="pa-audio-player__progress-range w-[100%] cursor-pointer"
        min="0"
        value={progress}
        max={Math.floor(duration)}
        onChange={(e: any) => handleProgress(e as any)}
      />
      <span className="pa-audio-player__progress-time-left tabular-nums">
        {timeLeft()}
      </span>
    </span>
  )
}
