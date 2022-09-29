// @ts-ignore:next-line
import * as React from 'react'
import { useEnsName } from 'wagmi'
import { usePlayerContext } from '../../context/AudioPlayerContext'

export const AudioPlayerDisplayInfo = () => {
  const { currentTrack } = usePlayerContext()

  const { data: ensName } = useEnsName({
    address: currentTrack?.artist,
  })

  return (
    <div className="pa-audio-player__info-container col-span-2 ">
      <div className="pa-audio-player__info-container-items flex items-center">
        <span className="pa-audio-player__info-container-artist">
          {ensName ? ensName : currentTrack?.artist}
        </span>
        <span className="pa-audio-player__info-container-hyphen mx-1">-</span>
        <span className="pa-audio-player__info-container-title truncate">
          {currentTrack?.title}
        </span>
      </div>
    </div>
  )
}
