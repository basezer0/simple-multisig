
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

Using first Acme test account:

    0: 0xCb1470BD0E7122692d7E605ae986403DefB25a2e       Owner
    1: 0x5379dC36208a1bfa8E1a3D717c326682876383Db       Sig1
    2: 0x3d64012868974a720054FFe6FBd904a1D06c5355       Sig0
    3: 0xb9A2936f93D3bF9739890449aaA79B6DAC54251e       Sig2
    4: 0xAd7978A54D26D89663EE11F5625209f91485d282       <scratch>
    5: 0xf8ff556E8f0266f376C16C88e73F43B1C718B78A
    6: 0xa4F89a06723b22a2640521a4E9fA3e6e5dD7a727
    7: 0x3D5BFBc39696e917bB77D9Cd100c2858D69f340F
    8: 0xB445a62e0b99beaD47e71fFb0F4523E6Ba501660
    9: 0x36da6Ed5e773105331Ee456e1d6DAaA6dE5f0ccF

Tunnel 7545 to ropsten fullnode:

    ssh -L 7545:localhost:7545 home2.bonsai.com

Deploy:

    truffle compile
    truffle migrate --network ropsten

Redeploy (after successful deploy):

    truffle migrate --network ropsten --reset

Result:

    $ truffle migrate --network ropsten --reset
    Using network 'ropsten'.

    Running migration: 1_initial_migration.js
      Replacing Migrations...
      ... 0xa773acd5123b1e843d7887b6907dcb833fb36c58a86f15611629de309adb0587
      Migrations: 0x073a97a4060cd4be50c421336a005fa870622ba6
    Saving successful migration to network...
      ... 0x180ab7e529d2c03555426722c5c6b25b45df99718e97324a01d958eae4b661bd
    Saving artifacts...
    Running migration: 2_deploy_contracts.js
      Replacing TestRegistry...
      ... 0xfbe700091b5acebe72341fc59f5857fb8025025c4c1ecfc2b4735ff886d3a158
      TestRegistry: 0xeb99f3fdd30b0139da726ad479c4047c76865392
      Replacing SimpleMultiSig...
      ... 0xd93b814878326ace46379bd5ff0a9636075f582875e14e1fa31f671d3c857d1f
      SimpleMultiSig: 0xd0770917e72e9c44a8201de9aa952175b57ad7b2
    Saving successful migration to network...
      ... 0x25dd737c0e3ae2077bf469eb89418b8351afaa691ef075350ac233e16f206ffa
    Saving artifacts...

The contract addresses:

    SimpleMultiSig: 0xd0770917e72e9c44a8201de9aa952175b57ad7b2
      TestRegistry: 0xeb99f3fdd30b0139da726ad479c4047c76865392

Signing:

    # Follow directions at https://github.com/ethereum/web3.py

    export WEB3_PROVIDER_URI=http://localhost:7545
    ./twosig.py
    
