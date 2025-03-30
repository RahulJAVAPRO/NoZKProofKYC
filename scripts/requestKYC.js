const { ethers } = require("hardhat");

async function main() {
  const KYCRegistryAddress = "0x4b03A3b8c9886b875b671007Fb5238ea3Ef995ca"; // Replace with your deployed contract address
  const [deployer] = await ethers.getSigners();
  
  console.log("Deployer address:", deployer.address);

  // Contract ABI
  const KYCRegistryABI = [
    "function requestKYC(string memory _name, uint8 _age, string memory _userId) external"
  ];

  const kycRegistry = new ethers.Contract(KYCRegistryAddress, KYCRegistryABI, deployer);

  // Request KYC for the deployer
  const name = "Aditya Mehta"; // Replace with actual name
  const age = 20; // Replace with actual age
  const userId = "aditya-12345"; // Replace with a unique user identifier
  
  const tx = await kycRegistry.requestKYC(name, age, userId);
  await tx.wait(); // Wait for the transaction to be mined

  console.log("KYC requested for deployer!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
