import * as React from 'react'
import {
  useDropsContextProvider,
  addIPFSGateway,
} from '@public-assembly/zora-drops-utils'

import { PlayerWrapper, ControlsContainer, AudioPlayerDisplayInfo } from './../wrappers'
import { AudioPlayerContextProvider } from '../../context/AudioPlayerContext'

export function EditionsPlayerRenderer({ nftId = 0 }: { nftId?: number }) {
  const { data } = useDropsContextProvider()

  const formattedPlaylist = React.useMemo(() => {
    const tracks =
      data &&
      data
        /* @ts-ignore */
        ?.filter((item) => !!item)
        .map((track: any) => {
          try {
            return {
              id: track.address,
              artist: track.creator,
              title: track.name,
              image: addIPFSGateway(track.editionMetadata.imageURI),
              audioSrc: addIPFSGateway(track.editionMetadata.animationURI),
            }
          } catch (err) {
            console.log(err)
          }
        })
    return tracks
  }, [data])

  const nft = React.useMemo(() => {
    return formattedPlaylist && formattedPlaylist[nftId]
  }, [formattedPlaylist, nftId])

  if (!formattedPlaylist) return null

  return (
    <AudioPlayerContextProvider pl={formattedPlaylist} nft={nft}>
      <PlayerWrapper>
        <AudioPlayerDisplayInfo />
        <ControlsContainer />
      </PlayerWrapper>
    </AudioPlayerContextProvider>
  )
}
