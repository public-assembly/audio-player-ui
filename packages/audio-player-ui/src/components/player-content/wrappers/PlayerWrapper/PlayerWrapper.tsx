export function PlayerWrapper({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) {
  return (
    <div className="flex items-center z-40 fixed bottom-0  left-0 right-0 justify-between  ">
      <div className="flex flex-col gap-2 xl:grid grid-cols-12 w-[100%] bg-[#ffffff] text-sm text-stone-800 border-t border-t-stone-300 border-l-0 border-b-0 border-r-0  p-6 ">
        {children}
      </div>
    </div>
  );
}
