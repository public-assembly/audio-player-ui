// @ts-ignore:next-line
import * as React from 'react'
import { DropsContextProvider } from '@public-assembly/zora-drops-utils'
import { EditionsPlayerRenderer } from './editions-components/EditionsPlayerRenderer'
import { AudioPlayerCallbacks } from '../types/AudioPlayerContextType'

export function EditionsAudioPlayer({
  contractAddresses,
  networkId = '1',
  refreshInterval = 0,
  nftId = 0,
  playHandlerCallback,
  pauseHandlerCallback,
  nextHandlerCallback,
  prevHandlerCallback,
}: {
  contractAddresses: string[]
  networkId?: '1' | '5'
  refreshInterval?: number
  nftId?: number
} & AudioPlayerCallbacks) {
  return (
    <DropsContextProvider
      contractAddresses={contractAddresses}
      refreshInterval={refreshInterval}
      networkId={networkId}>
      <EditionsPlayerRenderer
        nftId={nftId}
        playHandlerCallback={playHandlerCallback}
        pauseHandlerCallback={pauseHandlerCallback}
        nextHandlerCallback={nextHandlerCallback}
        prevHandlerCallback={prevHandlerCallback}
      />
    </DropsContextProvider>
  )
}
