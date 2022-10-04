// @ts-ignore:next-line
import * as React from 'react'

import { usePlayerContext } from '../../context/AudioPlayerContext'

export const Prev = ({ prevSong }: any) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const { playlist } = usePlayerContext()
  if (playlist.length <= 1) {
    return null
  }
  return (
    <button
      onClick={prevSong}
      className="pa-audio-player__prev"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {isHovered ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="2" height="16" fill="#ECF1F0" />
          <path d="M20 19L6 12.0002L20 5L20 19Z" fill="#ECF1F0" />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="2" height="16" fill="#AAB4B1" />
          <path d="M20 19L6 12.0002L20 5L20 19Z" fill="#AAB4B1" />
        </svg>
      )}
    </button>
  )
}
