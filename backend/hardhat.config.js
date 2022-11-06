require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

const ALCHEMY_URL= process.env.ALCHEMY_URL;
const PRIVATE_KEY=process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY=process.env.ETHERSCAN_API_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks : {
    goerli : {
      url : ALCHEMY_URL,
      accounts : [PRIVATE_KEY]
    }
  },
    etherscan:{
      apiKey:ETHERSCAN_API_KEY

    }
};
