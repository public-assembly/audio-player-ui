import { usePlayerContext } from '../../../../context/AudioPlayerContext'

export const AudioPlayerDisplayInfo = ({}) => {
  const { currentTrack } = usePlayerContext()
  const { artist, title } = currentTrack
  return (
    <div className="pa-audio-player__info-container col-span-2 ">
      <div className="pa-audio-player__info-container-items flex items-center">
        <span className="pa-audio-player__info-container-artist">{artist}</span>
        <span className="pa-audio-player__info-container-hyphen mx-1">-</span>
        <span className="pa-audio-player__info-container-title truncate">{title}</span>
      </div>
    </div>
  )
}
