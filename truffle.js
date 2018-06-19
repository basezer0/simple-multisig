require('dotenv').config()
var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
    solc: {
        optimizer: {
            enabled: true,
            runs: 200
        }
    },
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network id
        },
        ropsten: {
            provider: function() {
                return new HDWalletProvider(
                    process.env.ROPSTEN_MNEMONIC,
                    // process.env.ROPSTEN_INFURA
                    "http://localhost:7545"
                );
            },
            gas: 4700000,
            gasPrice: 5000000000, // 5 gWei
            network_id: 3
        },
        mainnet: {
            provider: function() {
                return new HDWalletProvider(
                    process.env.MAINNET_MNEMONIC,
                    process.env.MAINNET_INFURA
                );
            },
            gas: 4700000,
            gasPrice: 10000000000, // 10 gWei
            network_id: 1
        }
    }
};
