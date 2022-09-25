import { useState } from "react";

/**
 * We should memoize all the handler functions with react useCallback
 * https://dmitripavlutin.com/dont-overuse-react-usecallback/
 * example from similar set of handlers:
 * https://github.com/dblodorn/blocksyncer/blob/main/%40media-player/useMediaPlayer.tsx
 */

export function useAudioPlayer() {
  const [currentTrack, setCurrentTrack] = useState<HTMLAudioElement | null>(
    null
  );
  const [duration, setDuration] = useState(0);
  const [curTime, setCurTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState(0);
  const [muted, setMuted] = useState(false);
  console.log("currentTrack", currentTrack);

  const toggleMute = () => {
    setMuted(!muted);
  };

  const togglePlay = () => {
    setPlaying(!playing);
    if (currentTrack != null) {
      const tr = currentTrack;
      playing ? tr.pause() : tr.play();
    }
  };
  const onLoadedMetadata = () => {
    if (currentTrack != null) {
      setDuration(currentTrack.duration);
      setCurTime(currentTrack.currentTime);
    }
  };

  const onLoad = () => {
    if (currentTrack != null) {
      setCurTime(currentTrack.currentTime);
      setDuration(currentTrack.duration);
    }
  };
  const onTimeUpdate = () => {
    if (currentTrack != null) {
      setCurTime(currentTrack.currentTime);
    }
  };
  const onPlay = () => {
    setPlaying(true);
    if (currentTrack != null) {
      setDuration(currentTrack.duration);
      setCurTime(currentTrack.currentTime);
    }
  };
  const onPause = () => {
    setPlaying(false);
  };

  return {
    curTime,
    duration,
    setDuration,
    setCurTime,
    setMuted,
    playing,
    setPlaying,
    clickedTime,
    setClickedTime,
    muted,
    onPlay,
    onTimeUpdate,
    onLoad,
    onLoadedMetadata,
    toggleMute,
    togglePlay,
    onPause,
    setCurrentTrack,
  };
}

export default useAudioPlayer;
