const { ethers } = require("hardhat");

async function main() {
  // The address of the deployed contract
  const KYCRegistryAddress = "0x4b03A3b8c9886b875b671007Fb5238ea3Ef995ca"; // Replace with your deployed contract address
  const [deployer] = await ethers.getSigners();
  
  console.log("Deployer address:", deployer.address);

  // Contract ABI
  const KYCRegistryABI = [
    "function getUserInfo(address _user) external view returns (string memory, uint8, uint8)",
    "function isUserVerified(address _user) external view returns (bool)"
  ];

  const kycRegistry = new ethers.Contract(KYCRegistryAddress, KYCRegistryABI, deployer);

  // Check if the deployer is verified
  const isVerified = await kycRegistry.isUserVerified(deployer.address);
  console.log("User is verified:", isVerified);

  // Fetch the user info
  const [name, age, status] = await kycRegistry.getUserInfo(deployer.address);
  
  // Map the status to readable text
  const statusText = ["Unverified", "Pending", "Verified", "Rejected"][status];

  console.log("User Info:");
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("KYC Status:", statusText);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
