// @ts-ignore:next-line
import * as React from 'react'

interface PlayToggleProps {
  pausePlayHandler: () => void
  playing: boolean
  playHandler?: () => void
  pauseHandler?: () => void
}

export const PlayToggle = ({ pausePlayHandler, playing }: PlayToggleProps) => {
  const [isPlayHovered, setIsPlayHovered] = React.useState(false)
  return (
    <>
      <button
        onClick={pausePlayHandler}
        onMouseEnter={() => setIsPlayHovered(true)}
        onMouseLeave={() => setIsPlayHovered(false)}
        className={`pa-audio-player__play-button ${
          !playing ? 'inline-block' : 'hidden'
        }`}>
        {isPlayHovered ? (
          <svg
            className="pa-audio-player__play-icon--hovered"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="19.5" fill="#F1F7F6" stroke="#050A09" />
            <path d="M14 12L30 19.9998L14 28V12Z" fill="#050A09" />
          </svg>
        ) : (
          <svg
            className="pa-audio-player__play-icon"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="20"
              cy="20"
              r="19.5"
              fill="#F1F7F6"
              fillOpacity="0.7"
              stroke="#050A09"
            />
            <path d="M14 12L30 19.9998L14 28V12Z" fill="#050A09" />
          </svg>
        )}
      </button>
      <button
        onClick={pausePlayHandler}
        className={`pa-audio-player__pause-button ${
          playing ? 'inline-block' : 'hidden'
        }`}>
        <svg
          className="pa-audio-player__pause-icon"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="19.5" fill="#ECF1F0" stroke="#050A09" />
          <rect x="15" y="11.6667" width="2.5" height="16.6667" fill="#050A09" />
          <rect x="22.5" y="11.6667" width="2.5" height="16.6667" fill="#050A09" />
        </svg>
      </button>
    </>
  )
}
