var TR = artifacts.require("TestRegistry");
var SMS = artifacts.require("SimpleMultiSig");

module.exports = function(deployer) {
    deployer.deploy(TR);
    deployer.deploy(SMS, 2, [
        "0x027Dcd6FCB907622E00FE6DA3E06E57336b32128",
        "0x76d7539A291b9Fb8524e19D789F5D594c9D08FE2",
        "0xdC25bd515A122A16661B4c601d6B73a317e1e2B4",
    ]);
};
