/** This script is connected to our chapter_10 frontend folder.
    Anytime "npx hardhat deploy --network" is run, constants/contractAddresses.json is updated with the new contract for the "--network" deployed on
    When "npx hardhat node" is run the Contract Address for chainId 31337 is run 
    we also update the constants/abi.json file with the latest ABI

*/

const {
  frontEndContractsFile,
  frontEndAbiFile,
} = require("../helper-hardhat-config");
const fs = require("fs");
const { network } = require("hardhat");

module.exports = async () => {
  if (process.env.UPDATE_FRONT_END) {
    // only update FE if UPDATE_FRONT_END is set true
    console.log("Writing to front end...");
    await updateContractAddresses();
    await updateAbi();
    console.log("Front end written!");
  }
};

async function updateAbi() {
  const raffle = await ethers.getContract("Raffle");
  fs.writeFileSync(
    frontEndAbiFile,
    raffle.interface.format(ethers.utils.FormatTypes.json)
  );
}

async function updateContractAddresses() {
  // update contractaddresses.json file with latest chain specific contract addresses
  const raffle = await ethers.getContract("Raffle");
  const chainId = network.config.chainId.toString();
  const contractAddresses = JSON.parse(
    fs.readFileSync(frontEndContractsFile, "utf8")
  );
  if (chainId in contractAddresses) {
    if (!contractAddresses[chainId].includes(raffle.address)) {
      contractAddresses[chainId].push(raffle.address);
    }
  } else {
    contractAddresses[chainId] = [raffle.address]; // else create a key value pairs
  }
  fs.writeFileSync(frontEndContractsFile, JSON.stringify(contractAddresses));
}
module.exports.tags = ["all", "frontend"];
