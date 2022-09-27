// @ts-ignore:next-line
import * as React from 'react'

import { ImVolumeMedium, ImVolumeMute } from 'react-icons/im'

interface VolControlsProps {
  isMuted: boolean
  toggleMute: () => void
}
export const VolControls = ({ isMuted, toggleMute }: VolControlsProps) => {
  return (
    <>
      <button
        onClick={() => toggleMute()}
        className={`pa-audio-player__volume-controls-volume ${
          !isMuted ? 'inline-block' : 'hidden'
        }`}
        aria-label="volume">
        <ImVolumeMedium className="pa-audio-player__volume-controls-volume-icon h-6 w-6" />
      </button>
      <button
        onClick={toggleMute}
        className={`pa-audio-player__volume-controls-muted ${
          isMuted ? 'inline-block' : 'hidden'
        }`}
        aria-label="muted">
        <ImVolumeMute className="pa-audio-player__volume-controls-muted-icon h-6 w-6" />
      </button>
    </>
  )
}
