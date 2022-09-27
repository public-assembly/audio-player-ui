import { Header } from './Header'
import { AudioPlayer } from '@public-assembly/audio-player-ui'
import { fakePlaylist } from '../fakePlaylist'
import { useState } from 'react'

export function PageWrapper({ children, ...props }: { children?: JSX.Element }) {
  const [nft, setNFT] = useState(fakePlaylist[0])

  return (
    <>
      <Header />
      <main {...props} className="p-4">
        {fakePlaylist.map((nft) => (
          <div
            key={nft.id}
            className=" mb-4 cursor-pointer border p-3"
            onClick={() => setNFT(nft)}>
            {nft.artist} - {nft.title}
          </div>
        ))}
        <AudioPlayer playlist={fakePlaylist} nft={nft} />

        {children}
      </main>
    </>
  )
}
