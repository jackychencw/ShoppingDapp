var Shop = artifacts.require("../contracts/Shop");

module.exports = function (deployer) {
  deployer.deploy(Shop);
};
