// Web3 Configuration
export const SUPPORTED_CHAINS = {
  ethereum: {
    id: 1,
    name: 'Ethereum',
    network: 'homestead',
    nativeCurrency: {
      decimals: 18,
      name: 'Ethereum',
      symbol: 'ETH',
    },
    rpcUrls: {
      default: {
        http: ['https://eth-mainnet.g.alchemy.com/v2/demo'],
      },
      public: {
        http: ['https://eth-mainnet.g.alchemy.com/v2/demo'],
      },
    },
    blockExplorers: {
      default: { name: 'Etherscan', url: 'https://etherscan.io' },
    },
  },
  polygon: {
    id: 137,
    name: 'Polygon',
    network: 'matic',
    nativeCurrency: {
      decimals: 18,
      name: 'MATIC',
      symbol: 'MATIC',
    },
    rpcUrls: {
      default: {
        http: ['https://polygon-rpc.com'],
      },
      public: {
        http: ['https://polygon-rpc.com'],
      },
    },
    blockExplorers: {
      default: { name: 'PolygonScan', url: 'https://polygonscan.com' },
    },
  },
  arbitrum: {
    id: 42161,
    name: 'Arbitrum One',
    network: 'arbitrum',
    nativeCurrency: {
      decimals: 18,
      name: 'Ethereum',
      symbol: 'ETH',
    },
    rpcUrls: {
      default: {
        http: ['https://arb1.arbitrum.io/rpc'],
      },
      public: {
        http: ['https://arb1.arbitrum.io/rpc'],
      },
    },
    blockExplorers: {
      default: { name: 'Arbiscan', url: 'https://arbiscan.io' },
    },
  },
};

export const WALLET_CONNECT_PROJECT_ID = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'demo-project-id';

export const WEB3_ANALYTICS_TOOLS = [
  {
    name: 'DeFiLlama',
    url: 'https://defillama.com',
    description: 'TVL and DeFi protocol analytics'
  },
  {
    name: 'Dune Analytics',
    url: 'https://dune.com',
    description: 'Custom blockchain data queries and dashboards'
  },
  {
    name: 'Nansen',
    url: 'https://nansen.ai',
    description: 'On-chain analytics and wallet tracking'
  },
  {
    name: 'Messari',
    url: 'https://messari.io',
    description: 'Crypto market intelligence and research'
  },
  {
    name: 'Token Terminal',
    url: 'https://tokenterminal.com',
    description: 'Fundamental analysis for crypto protocols'
  }
];

export const DEFI_PROTOCOLS = [
  {
    name: 'Uniswap',
    category: 'DEX',
    chain: 'Ethereum',
    tvl: '$4.2B'
  },
  {
    name: 'Aave',
    category: 'Lending',
    chain: 'Multi-chain',
    tvl: '$6.8B'
  },
  {
    name: 'Compound',
    category: 'Lending',
    chain: 'Ethereum',
    tvl: '$2.1B'
  },
  {
    name: 'Curve',
    category: 'DEX',
    chain: 'Multi-chain',
    tvl: '$3.5B'
  }
];