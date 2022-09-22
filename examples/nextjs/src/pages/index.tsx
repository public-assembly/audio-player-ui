import { useAccount } from "wagmi";

function Page() {
  const { address } = useAccount();

  const audioSrc =
    "https://arena-attachments.s3.amazonaws.com/18170014/30a9e158e4001a12a1cb9e2c2f05586a.wav?1663852383";
  return (
    <section className="flex flex-col gap-4">
      <audio id="audio" autoPlay>
        <source src={audioSrc} />
        Your browser does not support the <code>audio</code> element.
      </audio>
    </section>
  );
}

export default Page;
