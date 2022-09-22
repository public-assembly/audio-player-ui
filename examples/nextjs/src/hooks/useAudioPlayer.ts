import { useState, useEffect } from "react";

function useAudioPlayer() {
  const [duration, setDuration] = useState(null);
  const [curTime, setCurTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState(0);
  const [muted, setMuted] = useState(false);
  console.log(muted);
  let audio: any;

  if (typeof window !== "undefined") {
    audio = document.getElementById("audio") as HTMLAudioElement;
  }

  const toggleMute = () => {
    setMuted(!muted);
  };
  useEffect(() => {
    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };

    const setAudioTime = () => setCurTime(audio.currentTime);
    // DOM listeners: update React state on DOM events
    audio.addEventListener(
      "loademetadata",
      setAudioData,
      console.log("loaded")
    );
    audio.addEventListener("play", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);

    // React state listeners: update DOM on React state changes
    playing ? audio.play() : audio.pause();
    muted ? (audio.muted = true) : (audio.muted = false);
    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    // effect cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
      audio.removeEventListener("play", setAudioData);
    };
  }, [playing, clickedTime, curTime]);

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
    toggleMute,
    muted,
  };
}

export default useAudioPlayer;
