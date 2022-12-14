import { getAddress } from 'ethers/lib/utils'

export function isAddress(value: any): string | false {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

export function shortenAddress(address?: string, chars = 4): string {
  if (!address) {
    return ''
  }

  const parsed = isAddress(address)
  if (!parsed) {
    console.error(`Invalid 'address' parameter '${address}'.`)
    return ''
  }
  return `${parsed.substring(0, chars)}...${parsed.substring(42 - chars)}`
}
