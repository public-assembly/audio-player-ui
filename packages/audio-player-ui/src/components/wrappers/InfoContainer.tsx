// @ts-ignore:next-line
import * as React from 'react'
import { useEnsName } from 'wagmi'
import { usePlayerContext } from '../../context/AudioPlayerContext'
import { useValidAddress } from '../../hooks/useValidAddress'
import { shortenAddress } from '../../lib'

export const AudioPlayerDisplayInfo = () => {
  const { currentTrack } = usePlayerContext()

  const isValidAddress = useValidAddress(currentTrack?.artist)

  const { data: ensName } = useEnsName({
    address: currentTrack?.artist,
  })

  const artistName = React.useMemo(() => {
    if (!isValidAddress) {
      return currentTrack?.artist
    } else {
      return ensName ? ensName : shortenAddress(currentTrack?.artist)
    }
  }, [isValidAddress, ensName, currentTrack?.artist])

  return (
    <div className="pa-audio-player__info-container col-span-2 ">
      <div className="pa-audio-player__info-container-items flex items-center">
        <span className="pa-audio-player__info-container-artist">{artistName}</span>
        <span className="pa-audio-player__info-container-hyphen mx-1">-</span>
        <span className="pa-audio-player__info-container-title truncate">
          {currentTrack?.title}
        </span>
      </div>
    </div>
  )
}
