// @ts-ignore:next-line
import * as React from 'react'
import { PlayerWrapper, ControlsContainer, AudioPlayerDisplayInfo } from './wrappers'
import { AudioPlayerContextProvider } from '../context/AudioPlayerContext'
import { AudioPlayerProps } from '../types/AudioPlayerContextType'

export function AudioPlayer({
  playlist,
  nft,
  playHandlerCallback,
  pauseHandlerCallback,
  nextHandlerCallback,
  prevHandlerCallback,
}: AudioPlayerProps) {
  return (
    <AudioPlayerContextProvider
      pl={playlist}
      nft={nft}
      playHandlerCallback={playHandlerCallback}
      pauseHandlerCallback={pauseHandlerCallback}
      nextHandlerCallback={nextHandlerCallback}
      prevHandlerCallback={prevHandlerCallback}>
      <PlayerWrapper>
        <AudioPlayerDisplayInfo />
        <ControlsContainer />
      </PlayerWrapper>
    </AudioPlayerContextProvider>
  )
}
