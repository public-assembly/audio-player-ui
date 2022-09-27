import React from 'react'

import { AudioPlayerContextType } from '../types/AudioPlayerContextType'

interface props {
  children: JSX.Element | JSX.Element[]
  pl: any
  nft: any
}
export const AudioPlayerContext = React.createContext<AudioPlayerContextType>(
  {} as AudioPlayerContextType
)

export const AudioPlayerContextProvider = ({ children, pl, nft }: props) => {
  //STATE
  const [playing, setPlaying] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(false)
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [duration, setDuration] = React.useState(0)
  const [progress, setProgress] = React.useState(0)
  const [volume, setVolume] = React.useState(0.75)
  const [playlist, setPlaylist] = React.useState(pl)
  const [currentTrack, setCurrentTrack] = React.useState(playlist[0])

  //REF
  const mediaRef = React.useRef<HTMLAudioElement>(null)

  React.useEffect(() => {
    if (nft !== currentTrack) {
      setCurrentTrack(nft)
    }
  }, [nft])

  React.useEffect(() => {
    if (!mediaRef.current) {
      return
    }
    if (playing) {
      mediaRef.current.play()
    } else {
      mediaRef.current.pause()
    }
  }, [playing])

  const pausePlayHandler = React.useCallback(() => {
    setPlaying(!playing)
  }, [playing, setPlaying])

  const playHandler = React.useCallback(() => {
    setPlaying(true)
  }, [playing, setPlaying])

  const pauseHandler = React.useCallback(() => {
    setPlaying(false)
  }, [playing, setPlaying])

  const nextSong = React.useCallback(() => {
    if (!currentTrack) {
      return
    }
    const nextIndex = playlist.indexOf(currentTrack) + 1
    if (nextIndex >= playlist.length) {
      setCurrentTrack(playlist[0])
    } else {
      setCurrentTrack(playlist[nextIndex])
    }
  }, [mediaRef.current, currentTrack])

  const prevSong = React.useCallback(() => {
    if (!currentTrack) {
      return
    }
    const prevIndex = playlist.indexOf(currentTrack) - 1
    if (prevIndex < 0) {
      setCurrentTrack(playlist[playlist.length - 1])
    } else {
      setCurrentTrack(playlist[prevIndex])
    }
  }, [mediaRef.current, currentTrack])

  const onEndHandler = React.useCallback(() => {
    nextSong()
  }, [mediaRef.current, currentTrack])

  const loadedHandler = React.useCallback(() => {
    if (!mediaRef.current) {
      return
    }
    setDuration(mediaRef.current.duration)
    setProgress(mediaRef.current.currentTime)
    setIsLoaded(true)
  }, [])

  const handleProgress = React.useCallback(
    (event: any) => {
      if (!mediaRef.current) {
        return
      }
      const manualChange = Number(event.target.value)
      mediaRef.current.currentTime = manualChange
      setProgress(manualChange)
    },
    [mediaRef.current]
  )

  const handleVolume = React.useCallback(
    (event: any) => {
      if (!mediaRef.current) {
        return
      }
      const manualChange = Number(event.target.value)
      mediaRef.current.volume = manualChange
      if (manualChange === 0) {
        setIsMuted(true)
      } else setIsMuted(false)
      setVolume(manualChange)
    },
    [mediaRef.current]
  )

  const timeUpdateHandler = React.useCallback(() => {
    if (!mediaRef.current) {
      return
    }
    setProgress(mediaRef.current.currentTime)
  }, [mediaRef.current])

  //Instead of setting the volume to 0.75 create a new state
  //to store the previous volume
  const toggleMute = React.useCallback(() => {
    setIsMuted(!isMuted)
    if (!isMuted) {
      setVolume(0)
    } else setVolume(0.75)
    if (volume === 0 && isMuted && mediaRef.current) {
      mediaRef.current.volume = 0.75
    }
  }, [isMuted, setIsMuted])

  React.useEffect(() => {
    if (mediaRef.current) {
      isMuted ? (mediaRef.current.muted = true) : (mediaRef.current.muted = false)
    }
  }, [isMuted, mediaRef])

  return (
    <AudioPlayerContext.Provider
      value={{
        playing,
        setPlaying,
        isMuted,
        setIsMuted,
        volume,
        setVolume,
        progress,
        setProgress,
        duration,
        setDuration,
        currentTrack,
        setCurrentTrack,
        playlist,
        setPlaylist,
        pausePlayHandler,
        playHandler,
        pauseHandler,
        loadedHandler,
        timeUpdateHandler,
        toggleMute,
        handleProgress,
        handleVolume,
        nextSong,
        prevSong,
        onEndHandler,
        isLoaded,
        setIsLoaded,
      }}>
      <audio
        ref={mediaRef}
        src={currentTrack ? currentTrack?.audioSrc : ''}
        loop={false}
        preload="auto"
        autoPlay={true}
        muted={isMuted}
        playsInline
        onPlay={playHandler}
        onPause={pauseHandler}
        onTimeUpdate={timeUpdateHandler}
        onLoadedData={loadedHandler}
        onEnded={onEndHandler}>
        Your browser does not support the <code>audio</code> element.
      </audio>

      {children}
    </AudioPlayerContext.Provider>
  )
}

export function usePlayerContext() {
  const playerContext = React.useContext(AudioPlayerContext)
  return playerContext
}
