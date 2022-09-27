// @ts-ignore:next-line
import * as React from 'react'

import { PlayerWrapper, ControlsContainer, AudioPlayerDisplayInfo } from './wrappers'
import { AudioPlayerContextProvider } from '../context/AudioPlayerContext'

export function AudioPlayer({ playlist, nft }: any) {
  return (
    <AudioPlayerContextProvider pl={playlist} nft={nft}>
      <PlayerWrapper>
        <AudioPlayerDisplayInfo />
        <ControlsContainer />
      </PlayerWrapper>
    </AudioPlayerContextProvider>
  )
}
