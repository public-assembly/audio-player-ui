// @ts-ignore:next-line
import * as React from 'react'

import { usePlayerContext } from '../../context/AudioPlayerContext'

export const AudioPlayerDisplayInfo = ({}) => {
  const { currentTrack } = usePlayerContext()
  return (
    <div className="pa-audio-player__info-container col-span-2 ">
      <div className="pa-audio-player__info-container-items flex items-center">
        <span className="pa-audio-player__info-container-artist">
          {currentTrack?.artist}
        </span>
        <span className="pa-audio-player__info-container-hyphen mx-1">-</span>
        <span className="pa-audio-player__info-container-title truncate">
          {currentTrack?.title}
        </span>
      </div>
    </div>
  )
}
