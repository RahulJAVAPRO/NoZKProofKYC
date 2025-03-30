require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
    solidity: "0.8.20", // Update this to match your contract's pragma
    networks: {
        sepolia: {
            url: process.env.ALCHEMY_RPC || "",
            accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
        },
    },
};

// 0x4b03A3b8c9886b875b671007Fb5238ea3Ef995ca