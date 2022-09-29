
import { EditionsAudioPlayer } from "@public-assembly/audio-player-ui";
import { useContractRead } from 'wagmi'
import Contract from './../abi/CurationManager.json'

function Page() {
  const { data } = useContractRead({
    addressOrName: "0x6422Bf82Ab27F121a043d6DE88b55FA39e2ea292", 
    contractInterface: Contract.abi,
    functionName: 'viewAllListings',
  })

  return (
    <section className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl mb-4">Consuming Curation Playlist</h1>
        <hr className="border border-b-0 border-dashed"/>
      </div>
      {data && data.length && <EditionsAudioPlayer
        contractAddresses={data as string[]}
      />}
    </section>
  );
}

export default Page
