import { HardhatUserConfig } from "hardhat/config";
import "@typechain/hardhat";
import "@nomicfoundation/hardhat-toolbox";
import '@nomicfoundation/hardhat-ethers';
import '@nomicfoundation/hardhat-chai-matchers';
import * as dotenv from "dotenv";

dotenv.config();

import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      },
      {
        version: "0.6.12",
      },
      {
        version: "0.8.19",
      },
      {
        version: "0.8.20",
      },
      {
        version: "0.8.17",
      },
    ],
  },

  paths: {
    sources: "./contracts",       // Ruta de los contratos
    tests: "./test",              // Ruta de los tests
    cache: "./cache",             // Ruta de la caché
    artifacts: "./artifacts"      // Ruta de los artefactos compilados
  },

  typechain: {
    outDir: "typechain-types",
    target: "ethers-v6",
  },

  networks: {
    alchemy: {
      url: process.env.PROVIDER_URL,
      accounts: [process.env.PRIVATE_KEY!],
      chainId: 137
    },
    localhost: {
      url: "http://localhost:8545",
    },
    polygon: {
      url: "https://rpc.ankr.com/polygon",
    },
    phalcon: {
      url: "https://rpc.phalcon.blocksec.com/rpc_976e899d81304115b89c38e35eded83f",
      accounts: [process.env.PRIVATE_KEY || ''],
      chainId: 1
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/<key>",
      accounts: [process.env.PRIVATE_KEY || '']
    }
  },
  etherscan: {
    apiKey: {
      phalcon: "05af9c9d-2f97-4026-9141-446d5ad24aef"
    },
    customChains: [
      {
        network: "phalcon",
        chainId: 1,
        urls: {
          apiURL: "https://api.phalcon.blocksec.com/api/rpc_976e899d81304115b89c38e35eded83f",
          browserURL:"https://app.blocksec.com/fork/scan/fork_fea58ebdd31a40078af9569146ac8124"
        }
      }
    ]
  }
};

export default config;