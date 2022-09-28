import * as React from 'react'
import {
  useDropsContextProvider,
  addIPFSGateway,
} from '@public-assembly/zora-drops-utils'

import { PlayerWrapper, ControlsContainer, AudioPlayerDisplayInfo } from './../wrappers'
import { AudioPlayerContextProvider } from '../../context/AudioPlayerContext'

export function EditionsPlayerRenderer() {
  const { data } = useDropsContextProvider()

  const formattedPlaylist = React.useMemo(() => {
    const tracks =
      data &&
      /* @ts-ignore */
      data
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
    return formattedPlaylist && formattedPlaylist[0]
  }, [formattedPlaylist])

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
