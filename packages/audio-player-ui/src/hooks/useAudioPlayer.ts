import { useCallback, useEffect, useState } from "react";

export function useAudioPlayer(
  mediaRef: any,
  playlist: any,
  currentTrack: any,
  setCurrentTrack: any
) {
  const [playing, setPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.75);

  useEffect(() => {
    if (!mediaRef.current) {
      return;
    }
    if (playing) {
      mediaRef.current.play();
    } else {
      mediaRef.current.pause();
    }
  }, [playing]);

  const pausePlayHandler = useCallback(() => {
    setPlaying(!playing);
  }, [playing, setPlaying]);

  const playHandler = useCallback(() => {
    setPlaying(true);
  }, [playing, setPlaying]);

  const pauseHandler = useCallback(() => {
    setPlaying(false);
  }, [playing, setPlaying]);

  const nextSong = useCallback(() => {
    const nextIndex = playlist.indexOf(currentTrack) + 1;
    if (nextIndex >= playlist.length) {
      setCurrentTrack(playlist[0]);
    } else {
      setCurrentTrack(playlist[nextIndex]);
    }
  }, [mediaRef.current, currentTrack]);

  const prevSong = useCallback(() => {
    const prevIndex = playlist.indexOf(currentTrack) - 1;
    if (prevIndex < 0) {
      setCurrentTrack(playlist[playlist.length - 1]);
    } else {
      setCurrentTrack(playlist[prevIndex]);
    }
  }, [mediaRef.current, currentTrack]);

  const onEndHandler = useCallback(() => {
    nextSong();
  }, [mediaRef.current, currentTrack]);

  const loadedHandler = useCallback(() => {
    if (!mediaRef.current) {
      return;
    }
    setDuration(mediaRef.current.duration);
    setProgress(mediaRef.current.currentTime);
    setIsLoaded(true);
  }, []);

  const handleProgress = useCallback(
    (event: any) => {
      if (!mediaRef.current) {
        return;
      }
      const manualChange = Number(event.target.value);
      mediaRef.current.currentTime = manualChange;
      setProgress(manualChange);
    },
    [mediaRef.current]
  );

  const handleVolume = useCallback(
    (event: any) => {
      if (!mediaRef.current) {
        return;
      }
      const manualChange = Number(event.target.value);
      mediaRef.current.volume = manualChange;
      if (manualChange === 0) {
        setIsMuted(true);
      } else setIsMuted(false);
      setVolume(manualChange);
    },
    [mediaRef.current]
  );

  const timeUpdateHandler = useCallback(() => {
    if (!mediaRef.current) {
      return;
    }
    setProgress(mediaRef.current.currentTime);
  }, [mediaRef.current]);

  //Instead of setting the volume to 0.75 create a new state
  //to store the previous volume
  const toggleMute = useCallback(() => {
    setIsMuted(!isMuted);
    if (!isMuted) {
      setVolume(0);
    } else setVolume(0.75);
    if (volume === 0 && isMuted) {
      mediaRef.current.volume = 0.75;
    }
  }, [isMuted, setIsMuted]);

  useEffect(() => {
    isMuted
      ? (mediaRef.current.muted = true)
      : (mediaRef.current.muted = false);
  }, [isMuted, mediaRef]);

  return {
    pausePlayHandler,
    playHandler,
    pauseHandler,
    loadedHandler,
    timeUpdateHandler,
    toggleMute,
    isMuted,
    playing,
    isLoaded,
    duration,
    progress,
    setProgress,
    handleProgress,
    volume,
    setVolume,
    handleVolume,
    nextSong,
    prevSong,
    onEndHandler,
    currentTrack,
  };
}
