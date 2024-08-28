import { WormholeConnectConfig } from "@wormhole-foundation/wormhole-connect";

export const wormholeConfig: WormholeConnectConfig = {
  env: "testnet",
  networks: ["sepolia", "fantom"],
  tokensConfig: {
    UCOSepolia: {
      key: "UCOSepolia",
      symbol: "UCO",
      nativeChain: "sepolia",
      tokenId: {
        chain: "sepolia",
        address: "0x35a27866C848cb6290217024410bbcf75c0509f8",
      },
      coinGeckoId: "basket",
      icon: "https://assets.coingecko.com/coins/images/34661/standard/BSKT_Logo.png?1705636891",
      color: "#2894EE",
      decimals: {
        default: 18,
      },
      foreignAssets: {
        fantom: {
          address: "0x0A16eAAb95dbEfa86348254DC0E28A7ADbE2fe86",
          decimals: 18,
        },
      },
    },
    UCOFantom: {
      key: "UCOFantom",
      symbol: "UCO",
      nativeChain: "fantom",
      tokenId: {
        chain: "fantom",
        address: "0x0A16eAAb95dbEfa86348254DC0E28A7ADbE2fe86",
      },
      coinGeckoId: "basket",
      icon: "https://assets.coingecko.com/coins/images/34661/standard/BSKT_Logo.png?1705636891",
      color: "#2894EE",
      decimals: {
        default: 18,
      },
      foreignAssets: {
        sepolia: {
          address: "0x35a27866C848cb6290217024410bbcf75c0509f8",
          decimals: 18,
        },
      },
    },
  },
  nttGroups: {
    UCO: {
      nttManagers: [
        {
          address: "0x50cd27c3A19b5958D0C2556c982283E22B61Dbb3",
          chainName: "sepolia",
          tokenKey: "UCOSepolia",
          transceivers: [
            {
              address: "0x299c51b298fAAa3B918a89bF76034eD94798DF56",
              type: "wormhole",
            },
          ],
        },
        {
          address: "0x57dF1202dfEbd4D3088CB6F2376eE1D80375b32E",
          chainName: "fantom",
          tokenKey: "UCOFantom",
          transceivers: [
            {
              address: "0xb487b6B9BC743499A028D51296507930e4061427",
              type: "wormhole",
            },
          ],
        },
      ],
      displayName: "sepo",
    },
  },
  rpcs: {
    sepolia: "https://ethereum-sepolia.publicnode.com",
  },
};
