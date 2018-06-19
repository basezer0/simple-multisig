
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
      ... 0x2b43e763ccae5e64e379abe4a6dea491580004373c22fec0b41d9d79074afe01
      Migrations: 0xf7405e888ecab388fbbae57a5cc63cad0a7b4dfc
    Saving successful migration to network...
      ... 0xc1f0d4ea1a58f80fa48960e31026f7b97de71e8c03b74f17f913d7f897173323
    Saving artifacts...
    Running migration: 2_deploy_contracts.js
      Replacing TestRegistry...
      ... 0x22e8e321232189aa0f76c43cf107bc240c141bab500b14bec4d191a9e2ba036a
      TestRegistry: 0x63d9887ad12ae1b86740fcb5488fdac0ff87deec
      Replacing SimpleMultiSig...
      ... 0x5c844f80f713b0d8523157044fbb64add09430e5a7dc95ad26be827cf281c69a
      SimpleMultiSig: 0x73d6abea446e239410bdadede665f8b2c636b847
    Saving successful migration to network...
      ... 0x402fafb37455bea34ceeebc4bd4f68c2d31519b65c5d8d74753746d6daf6fe04
    Saving artifacts...


    SimpleMultiSig: 0x73d6abea446e239410bdadede665f8b2c636b847
      TestRegistry: 0x63d9887ad12ae1b86740fcb5488fdac0ff87deec
