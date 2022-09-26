import { PlayerWrapper } from "./player-content/wrappers/PlayerWrapper/PlayerWrapper";
import { ControlsContainer } from "./player-content/wrappers/controls-wrapper/ControlsContainer";
import { AudioPlayerDisplayInfo } from "./player-content/wrappers/InfoContainer/InfoContainer";
import { AudioPlayerContextProvider } from "../context/AudioPlayerContext";

export function AudioPlayer({ playlist, nft }: any) {
  return (
    <AudioPlayerContextProvider pl={playlist} nft={nft}>
      <PlayerWrapper>
        <AudioPlayerDisplayInfo />
        <ControlsContainer />
      </PlayerWrapper>
    </AudioPlayerContextProvider>
  );
}
