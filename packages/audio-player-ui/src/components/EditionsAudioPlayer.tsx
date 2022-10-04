// @ts-ignore:next-line
import * as React from 'react'
import { DropsContextProvider } from '@public-assembly/zora-drops-utils'
import { EditionsPlayerRenderer } from './editions-components/EditionsPlayerRenderer'

export function EditionsAudioPlayer({
  contractAddresses,
  networkId = '1',
  refreshInterval = 0,
}: {
  contractAddresses: string[]
  networkId?: '1' | '5'
  refreshInterval?: number
}) {
  return (
    <DropsContextProvider
      contractAddresses={contractAddresses}
      refreshInterval={refreshInterval}
      networkId={networkId}>
      <EditionsPlayerRenderer />
    </DropsContextProvider>
  )
}
