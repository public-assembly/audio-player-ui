import { EditionsAudioPlayer } from "@public-assembly/audio-player-ui";

function Page() {
  const TEST_CONTRACTS = [
    '0xb7a791c3b5a0aa833e638250f982ebd29194f02c',
    '0x674fb9ed86b847db9aee0a19e9055d5d2c0e6cc4',
  ]
  
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl mb-4">Consuming Curation Playlist</h1>
        <hr className="border border-b-0 border-dashed"/>
      </div>
      <EditionsAudioPlayer
        contractAddresses={TEST_CONTRACTS}
      />
    </section>
  );
}

export default Page
