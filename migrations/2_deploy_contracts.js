var TR = artifacts.require("TestRegistry");
var SMS = artifacts.require("SimpleMultiSig");

module.exports = function(deployer) {
    deployer.deploy(TR);
    deployer.deploy(SMS, 2, [
        "0x3d64012868974a720054FFe6FBd904a1D06c5355",
        "0x5379dC36208a1bfa8E1a3D717c326682876383Db",
        "0xb9A2936f93D3bF9739890449aaA79B6DAC54251e",
    ]);
};
