const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const WhitelistContract = await hre.ethers.getContractFactory("Whitelist");
  const whitelistcontract = await WhitelistContract.deploy(10);

  await whitelistcontract.deployed();

  console.log("whitelistcontract deployed to:", whitelistcontract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
