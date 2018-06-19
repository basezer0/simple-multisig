
Setup
----------------------------------------------------------------

    npm install dotenv
    npm install truffle-hdwallet-provider
    npm install eth-lightwallet
    npm install solidity-sha3
    npm install bluebird

    truffle init
    

Building
----------------------------------------------------------------

    truffle compile


Testing
----------------------------------------------------------------

* Make sure `ganache-cli` is running in its own terminal window.
* `npm install`
* `npm run test`


Deploying to testnet
----------------------------------------------------------------

Tunnel 7545 to ropsten fullnode:

    ssh -L 7545:localhost:7545 home2.bonsai.com

Deploy:

    truffle compile
    truffle migrate --network ropsten

