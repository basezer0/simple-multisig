
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

Owners of the SimpleMultiSig contract are:

    0x37Ad0bBa45b0cd82DA36a111CF12B2eB53A6fBA7	acme-2
    0x60C109fCa3F4FE2880b092C03A2692CB3aa50e59	acme-0
    0xD0A559e0E7d534EA4aCf7C83657F873Ce7C9bBf4	acme-1

* These are each the first address from m/44'/1'/0'/0
* Permuted so the addresses are in order.

Working addresses for creation and testing are from
acme-0, HD path m/44'/60'/0'/0

    0: 0xCb1470BD0E7122692d7E605ae986403DefB25a2e       Creator
    1: 0x5379dC36208a1bfa8E1a3D717c326682876383Db
    2: 0x3d64012868974a720054FFe6FBd904a1D06c5355
    3: 0xb9A2936f93D3bF9739890449aaA79B6DAC54251e
    4: 0xAd7978A54D26D89663EE11F5625209f91485d282
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
      ... 0x4e1b730cac17a0f74ea397219d5efdd232f2e475bc512d83dc52a4aaec6bef6d
      Migrations: 0xce8c299d89575c0248fabcca36dff20878600c53
    Saving successful migration to network...
      ... 0x52b11e9100d02d4b5d077cad3de656347aed564c77b6644a7b57fdab463713a8
    Saving artifacts...
    Running migration: 2_deploy_contracts.js
      Replacing TestRegistry...
      ... 0xe4cbc18173ddfb56a800265a502efebe85a15aed2f1001244d9e5f469a355f2f
      TestRegistry: 0xbdd9485ee953318c3513097b8a25e7595ed6a62b
      Replacing SimpleMultiSig...
      ... 0x2471f3e884717510705da03684a9cfa22a45bb0b4d58f3614475571907b2819c
      SimpleMultiSig: 0x71d45030d5a139b56659b435b93958cd4b9b27d0
    Saving successful migration to network...
      ... 0xf4c2f0bf95c8f860e13184e6adee84ba8a777fa96204144879667f39dc6010b5
    Saving artifacts...

The contract addresses:

    SimpleMultiSig: 0x71d45030d5a139b56659b435b93958cd4b9b27d0
      TestRegistry: 0xbdd9485ee953318c3513097b8a25e7595ed6a62b

Signing:

    # Follow directions at https://github.com/ethereum/web3.py

    export WEB3_PROVIDER_URI=http://localhost:7545
    ./twosig.py
    
