// @ts-ignore:next-line
import * as React from 'react'

import { usePlayerContext } from '../../context/AudioPlayerContext'

export const Next = ({ nextSong }: any) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const { playlist } = usePlayerContext()
  if (playlist.length <= 1) {
    return null
  }
  return (
    <button
      onClick={nextSong}
      className="pa-audio-player__next"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {isHovered ? (
        <svg
          className="pa-audio-player__next-icon--hovered"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            x="20"
            y="20"
            width="2"
            height="16"
            transform="rotate(-180 20 20)"
            fill="#ECF1F0"
          />
          <path d="M4 5L18 11.9998L4 19L4 5Z" fill="#ECF1F0" />
        </svg>
      ) : (
        <svg
          className="pa-audio-player__next-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            x="20"
            y="20"
            width="2"
            height="16"
            transform="rotate(-180 20 20)"
            fill="#AAB4B1"
          />
          <path d="M4 5L18 11.9998L4 19L4 5Z" fill="#AAB4B1" />
        </svg>
      )}
    </button>
  )
}
