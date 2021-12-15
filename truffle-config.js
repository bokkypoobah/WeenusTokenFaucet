const HDWalletProvider = require("@truffle/hdwallet-provider");
const config = require("dotenv").config();
const fs = require("fs");
const mnemonic = fs.readFileSync("private/.secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },

    mainnet: {
      provider: () =>
        new HDWalletProvider(mnemonic, config.parsed.MAINNET_NETWORK_URL),
      network_id: config.parsed.MAINNET_NETWORK_ID,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },

    testnet: {
      provider: () =>
        new HDWalletProvider(mnemonic, config.parsed.TESTNET_NETWORK_URL),
      network_id: config.parsed.TESTNET_NETWORK_ID,
      gas: 5500000,
      confirmations: 1,
      timeoutBlocks: 150,
      skipDryRun: true,
    },
  },

  compilers: {
    solc: {
      version: "0.5.4",
      settings: {
        optimizer: {
          enabled: true,
          runs: 99999,
        },
      },
    },
  },

  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: config.parsed.EXPLORER_API_KEY,
  },
};
