import { AudioPlayer } from "@public-assembly/audio-player-ui";
import { fakePlaylist } from "../fakePlaylist";
import { useState, useCallback } from "react";
import { RawDisplayer } from "../components";

function MockPlaylistPage() {
  const [nft, setNFT] = useState(fakePlaylist[0]);
  
  const onPlay = useCallback(() => {
    console.log('Play')
  }, [])

  const onPause = useCallback(() => {
    console.log('Pause')
  }, [])

  const onNext = useCallback(() => {
    console.log('Next')
  }, [])

  const onPrevious = useCallback(() => {
    console.log('Previous')
  }, [])

  return (
    <section className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl mb-4">Consuming Mock Playlist</h1>
        <hr className="border border-b-0 border-dashed"/>
      </div>
      <RawDisplayer data={fakePlaylist} />
      {fakePlaylist.map((nft) => (
        <div
          key={nft.id}
          className=" p-3 border cursor-pointer mb-4"
          onClick={() => setNFT(nft)}
        >
          {nft.artist} - {nft.title}
        </div>
      ))}
      <AudioPlayer
        playlist={fakePlaylist}
        nft={nft}
        playHandlerCallback={onPlay}
        pauseHandlerCallback={onPause}
        nextHandlerCallback={() => onNext()}
        prevHandlerCallback={onPrevious}
      />
    </section>
  );
}

export default MockPlaylistPage;
