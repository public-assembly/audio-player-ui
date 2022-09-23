import { Header } from "./Header";
import { AudioPlayer } from "@public-assembly/audio-player-ui";
import { useAudioPlayer } from "@public-assembly/audio-player-ui";
import { useEffect, useRef } from "react";

type MusicNFT = {
  id: string;
  artist: string;
  title: string;
  image: string;
  audioSrc: string;
};
//FAKE DATA
const INIT_TEST_MUSIC_NFT = {
  id: "1",
  artist: "Public Assembly",
  title: "Test NFT",
  image: "https://i.imgur.com/1Q9ZQ9r.png",
  audioSrc:
    "https://arena-attachments.s3.amazonaws.com/18170014/30a9e158e4001a12a1cb9e2c2f05586a.wav?1663852383",
} as MusicNFT;

export function PageWrapper({
  children,
  ...props
}: {
  children?: JSX.Element;
}) {
  const trackRef = useRef<HTMLAudioElement>(null);
  const {
    onLoad,
    onLoadedMetadata,
    onPlay,
    onPause,
    onTimeUpdate,
    setCurrentTrack,
  } = useAudioPlayer();

  useEffect(() => {
    setCurrentTrack(trackRef.current);
  }, [trackRef]);

  return (
    <>
      <Header />
      <main {...props} className="p-4">
        <AudioPlayer
          id={INIT_TEST_MUSIC_NFT.id}
          artist={INIT_TEST_MUSIC_NFT.artist}
          title={INIT_TEST_MUSIC_NFT.title}
          image={INIT_TEST_MUSIC_NFT.image}
          audioSrc={INIT_TEST_MUSIC_NFT.audioSrc}
        />
        <audio
          ref={trackRef}
          autoPlay
          loop={false}
          src={INIT_TEST_MUSIC_NFT.audioSrc}
          onLoadedMetadata={onLoadedMetadata}
          onTimeUpdate={onTimeUpdate}
          onPlay={onPlay}
          onPause={onPause}
          onLoad={onLoad}
        >
          Your browser does not support the <code>audio</code> element.
        </audio>

        {children}
      </main>
    </>
  );
}
