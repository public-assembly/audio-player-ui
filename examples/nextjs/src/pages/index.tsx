import { EditionsAudioPlayer } from "@public-assembly/audio-player-ui";
/*
import { useContractRead } from 'wagmi'
import Contract from './../abi/CurationManager.json'
*/
function Page() {
  /*
  const { data } = useContractRead({
    addressOrName: "0x6422Bf82Ab27F121a043d6DE88b55FA39e2ea292", 
    contractInterface: Contract.abi,
    functionName: 'viewAllListings',
  })
  */

  const TEST_MINT_CONTRACTS = [
    '0x47191cb94c0b6925db9f15e000cf8e3e8864fc9b',
    '0xb7a791c3b5a0aa833e638250f982ebd29194f02c',
    '0x674fb9ed86b847db9aee0a19e9055d5d2c0e6cc4',
  ]

  return (
    <section className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl mb-4">Consuming Curation Playlist</h1>
        <hr className="border border-b-0 border-dashed"/>
      </div>
      {TEST_MINT_CONTRACTS && TEST_MINT_CONTRACTS.length && <EditionsAudioPlayer
        contractAddresses={TEST_MINT_CONTRACTS as string[]}
      />}
    </section>
  );
}

export default Page
