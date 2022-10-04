/* @ts-ignore */
import * as React from 'react'
import { DropsContextProvider } from '@public-assembly/zora-drops-utils'
import { EditionsPlayerRenderer } from './editions-components/EditionsPlayerRenderer'

export function EditionsAudioPlayer({
  contractAddresses,
  refreshInterval = 0,
}: {
  contractAddresses: string[]
  refreshInterval?: number
}): JSX.Element {
  return (
    <DropsContextProvider
      /* @ts-ignore */
      contractAddresses={contractAddresses}
      refreshInterval={refreshInterval}>
      <EditionsPlayerRenderer />
    </DropsContextProvider>
  )
}
