export type AudioPlayerContextType = {
  playing: boolean
  setPlaying: (isPlaying: boolean) => void
  isMuted: boolean
  setIsMuted: (isMuted: boolean) => void
  volume: number
  setVolume: (volume: number) => void
  progress: number
  setProgress: (progress: number) => void
  duration: number
  setDuration: (duration: number) => void
  currentTrack: any
  setCurrentTrack: (track: any) => void
  playlist: any[]
  setPlaylist: (playlist: any[]) => void
  pausePlayHandler: () => void
  playHandler: () => void
  pauseHandler: () => void
  loadedHandler: () => void
  timeUpdateHandler: () => void
  toggleMute: () => void
  handleProgress: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleVolume: (e: React.ChangeEvent<HTMLInputElement>) => void
  nextSong: () => void
  prevSong: () => void
  onEndHandler: () => void
  isLoaded: boolean
  setIsLoaded: (isLoaded: boolean) => void
}
