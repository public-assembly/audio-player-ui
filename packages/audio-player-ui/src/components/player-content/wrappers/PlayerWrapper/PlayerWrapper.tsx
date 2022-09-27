export function PlayerWrapper({ children }: { children?: JSX.Element | JSX.Element[] }) {
  return (
    <div className="pa-audio-player__player fixed bottom-0 left-0 right-0 z-40  flex items-center justify-between  ">
      <div className="pa-audio-player__player-wrapper flex w-[100%] grid-cols-12 flex-col gap-2 border-t border-l-0 border-b-0 border-r-0 border-t-stone-300 bg-[#ffffff] p-6 text-sm text-stone-800  xl:grid ">
        {children}
      </div>
    </div>
  )
}
