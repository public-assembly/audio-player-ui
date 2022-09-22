import { Header } from "./Header";
import { AudioPlayer } from "@public-assembly/audio-player-ui";
import useAudioPlayer from "../hooks/useAudioPlayer";

export function PageWrapper({
  children,
  ...props
}: {
  children?: JSX.Element;
}) {
  const {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
    toggleMute,
    muted,
  } = useAudioPlayer();
  //HARDCODED FOR NOW
  const artistName = "Artist";
  const trackName = "Song";
  return (
    <>
      <Header />
      <main {...props} className="p-4">
        {children}
      </main>
      <AudioPlayer
        currentTime={curTime}
        duration={duration}
        playing={playing}
        setPlaying={setPlaying}
        setClickedTime={setClickedTime}
        artistName={artistName}
        trackName={trackName}
        toggleMute={toggleMute}
        muted={muted}
      />
    </>
  );
}
