// @ts-ignore:next-line
import * as React from 'react'

import { BiSkipPrevious } from 'react-icons/bi'
import { usePlayerContext } from '../../context/AudioPlayerContext'

export const Prev = ({ prevSong }: any) => {
  const { playlist } = usePlayerContext()
  if (playlist.length <= 1) {
    return null
  }
  return (
    <button onClick={prevSong} className="pa-audio-player__prev">
      <BiSkipPrevious className="pa-audio-player__prev-icon h-6 w-6" />
    </button>
  )
}
