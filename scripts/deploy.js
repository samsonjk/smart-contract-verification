// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const hre = require("hardhat");

async function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, ms)
    });
  }

async function main() {

  // Get the contract factory
  
  const signers = await hre.ethers.getSigners();

  const ContractFactory = await hre.ethers.getContractFactory("MyContract");
  const myContract = await ContractFactory.deploy();

  await myContract.waitForDeployment();

  console.log(`Deployed to ${myContract.target}`);
  console.log(`Sepolia Etherscan : https://sepolia.etherscan.io/address/${myContract.target}`)

  // Delay for Verification
  await sleep(45 * 1000);
  console.log("Contract Verification Started...");
  hre.run("verify:verify", {
    address: myContract.target
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
