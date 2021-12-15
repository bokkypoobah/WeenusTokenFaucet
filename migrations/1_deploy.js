const WeenusToken = artifacts.require("WeenusToken");
const XeenusToken = artifacts.require("XeenusToken");
const YeenusToken = artifacts.require("YeenusToken");
const ZeenusToken = artifacts.require("ZeenusToken");

module.exports = async (deployer) => {
  await deployer.deploy(WeenusToken);
  await deployer.deploy(XeenusToken);
  await deployer.deploy(YeenusToken);
  await deployer.deploy(ZeenusToken);
};
