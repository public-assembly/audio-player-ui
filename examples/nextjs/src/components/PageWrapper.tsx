import { Header } from "./Header";
import { AudioPlayer } from "@public-assembly/audio-player-ui";
import { fakePlaylist } from "../fakePlaylist";
import { useState } from "react";

export type MusicNFT = {
  id: string;
  artist: string;
  title: string;
  image: string;
  audioSrc: string;
};

export function PageWrapper({
  children,
  ...props
}: {
  children?: JSX.Element;
}) {
  const [currentNFT, setCurrentNFT] = useState<MusicNFT>(fakePlaylist[0]);
  return (
    <>
      <Header />
      <main {...props} className="p-4">
        {fakePlaylist.map((nft) => (
          <div
            key={nft.id}
            className=" p-3 border cursor-pointer mb-4"
            onClick={() => setCurrentNFT(nft)}
          >
            {nft.artist} - {nft.title}
          </div>
        ))}
        <AudioPlayer playlist={fakePlaylist} nft={currentNFT} />

        {children}
      </main>
    </>
  );
}
