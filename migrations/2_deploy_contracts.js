var TR = artifacts.require("TestRegistry");
var SMS = artifacts.require("SimpleMultiSig");

module.exports = function(deployer) {
    deployer.deploy(TR);
    deployer.deploy(SMS, 2, [
        "0x37Ad0bBa45b0cd82DA36a111CF12B2eB53A6fBA7",
        "0x60C109fCa3F4FE2880b092C03A2692CB3aa50e59",
        "0xD0A559e0E7d534EA4aCf7C83657F873Ce7C9bBf4",
    ]);
};

