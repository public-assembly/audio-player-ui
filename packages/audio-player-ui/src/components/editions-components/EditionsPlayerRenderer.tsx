import * as React from 'react'
import {
  useDropsContextProvider,
  addIPFSGateway,
} from '@public-assembly/zora-drops-utils'

import { PlayerWrapper, ControlsContainer, AudioPlayerDisplayInfo } from './../wrappers'
import { AudioPlayerContextProvider } from '../../context/AudioPlayerContext'
import { AudioPlayerCallbacks } from '../../types/AudioPlayerContextType'

export function EditionsPlayerRenderer({
  nftId = 0,
  playHandlerCallback,
  pauseHandlerCallback,
  nextHandlerCallback,
  prevHandlerCallback,
}: {
  nftId?: number
} & AudioPlayerCallbacks) {
  const { data } = useDropsContextProvider()

  const formattedPlaylist = React.useMemo(() => {
    const tracks =
      data &&
      data
        /* @ts-ignore */
        ?.filter((item) => item !== undefined)
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
    <AudioPlayerContextProvider
      pl={formattedPlaylist}
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
