const hre = require("hardhat");

async function main() {
    // Get the Contract Factory
    const KYCRegistry = await hre.ethers.getContractFactory("KYCRegistry");

    console.log("Deploying KYCRegistry...");

    // Deploy the contract
    const kycRegistry = await KYCRegistry.deploy();
    await kycRegistry.waitForDeployment();

    console.log(`KYCRegistry deployed to: ${await kycRegistry.getAddress()}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
