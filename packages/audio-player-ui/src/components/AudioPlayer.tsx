import { PlayerWrapper } from "./player-content/wrappers/PlayerWrapper/PlayerWrapper";
import { ControlsContainer } from "./player-content/wrappers/controls-wrapper/ControlsContainer";
import { AudioPlayerDisplayInfo } from "./player-content/wrappers/InfoContainer/InfoContainer";
import { VolSlider } from "./player-content/controls/VolSlider/VolSlider";

interface AudioPlayerProps {
  id: string;
  artist: string;
  title: string;
  image: string;
  audioSrc: string;
}
export function AudioPlayer({
  // id,
  artist,
  title,
}: // image,
AudioPlayerProps) {
  return (
    <PlayerWrapper>
      <ControlsContainer />
      <div className="flex justify-between items-center">
        <AudioPlayerDisplayInfo artistName={artist} trackName={title} />
        <VolSlider />
      </div>
    </PlayerWrapper>
  );
}
