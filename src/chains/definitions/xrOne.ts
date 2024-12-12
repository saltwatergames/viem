import { defineChain } from '../../utils/chain/defineChain.js'

export const xrOne = /*#__PURE__*/ defineChain({
  id: 273,
  name: 'XR One',
  nativeCurrency: {
    decimals: 18,
    name: 'XR',
    symbol: 'XR',
  },
  rpcUrls: {
    default: { http: ['https://xr-one.calderachain.xyz/http'] },
  },
  testnet: false,
})
