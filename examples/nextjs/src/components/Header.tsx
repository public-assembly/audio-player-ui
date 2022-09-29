import { ConnectButton } from './ConnectButton'
import { Navigation } from './Navigation'

export function Header() {
  return (
    <header className="flex flex-row justify-between items-center w-full px-4 border-b border-gray-200 border-dashed">
      <Navigation />
      <ConnectButton />
    </header>
  )
}
