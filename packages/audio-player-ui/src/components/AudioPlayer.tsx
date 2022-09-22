import { PlayerWrapper } from "./player-content/wrappers/PlayerWrapper/PlayerWrapper";
import { ControlsContainer } from "./player-content/wrappers/controls-wrapper/ControlsContainer";
import { AudioPlayerDisplayInfo } from "./player-content/wrappers/InfoContainer/InfoContainer";
import { VolSlider } from "./player-content/controls/VolSlider/VolSlider";

interface AudioPlayerProps {
  currentTime: number;
  duration: number;
  playing: boolean;
  setPlaying: (playing: boolean) => void;
  setClickedTime: (time: number) => void;
  artistName: string;
  trackName: string;
  muted: boolean;
  toggleMute: () => void;
}

export function AudioPlayer({
  currentTime,
  duration,
  playing,
  setPlaying,
  setClickedTime,
  artistName,
  trackName,
  muted,
  toggleMute,
}: AudioPlayerProps) {
  return (
    <PlayerWrapper>
      <ControlsContainer
        playing={playing}
        setPlaying={setPlaying}
        duration={duration}
        currentTime={currentTime}
        setClickedTime={setClickedTime}
        muted={muted}
        toggleMute={toggleMute}
      />
      <div className="flex justify-between items-center">
        <AudioPlayerDisplayInfo artistName={artistName} trackName={trackName} />
        <VolSlider muted={muted} toggleMute={toggleMute} />
      </div>
    </PlayerWrapper>
  );
}
