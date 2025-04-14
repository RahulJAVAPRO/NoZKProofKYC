
//     const contractAddress = '0x4b03A3b8c9886b875b671007Fb5238ea3Ef995ca';
//     const abi = 
//     [
//     {
//         "inputs": [],
//         "stateMutability": "nonpayable",
//         "type": "constructor"
//     },
//     {
//         "inputs": [
//         {
//             "internalType": "address",
//             "name": "owner",
//             "type": "address"
//         }
//         ],
//         "name": "OwnableInvalidOwner",
//         "type": "error"
//     },
//     {
//         "inputs": [
//         {
//             "internalType": "address",
//             "name": "account",
//             "type": "address"
//         }
//         ],
//         "name": "OwnableUnauthorizedAccount",
//         "type": "error"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//         {
//             "indexed": true,
//             "internalType": "address",
//             "name": "user",
//             "type": "address"
//         }
//         ],
//         "name": "KYCApproved",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//         {
//             "indexed": true,
//             "internalType": "address",
//             "name": "user",
//             "type": "address"
//         },
//         {
//             "indexed": false,
//             "internalType": "string",
//             "name": "reason",
//             "type": "string"
//         }
//         ],
//         "name": "KYCRejected",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//         {
//             "indexed": true,
//             "internalType": "address",
//             "name": "user",
//             "type": "address"
//         },
//         {
//             "indexed": false,
//             "internalType": "string",
//             "name": "userId",
//             "type": "string"
//         }
//         ],
//         "name": "KYCRequested",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//         {
//             "indexed": true,
//             "internalType": "address",
//             "name": "user",
//             "type": "address"
//         }
//         ],
//         "name": "KYCRevoked",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//         {
//             "indexed": true,
//             "internalType": "address",
//             "name": "previousOwner",
//             "type": "address"
//         },
//         {
//             "indexed": true,
//             "internalType": "address",
//             "name": "newOwner",
//             "type": "address"
//         }
//         ],
//         "name": "OwnershipTransferred",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//         {
//             "indexed": true,
//             "internalType": "address",
//             "name": "verifier",
//             "type": "address"
//         }
//         ],
//         "name": "VerifierAdded",
//         "type": "event"
//     },
//     {
//         "anonymous": false,
//         "inputs": [
//         {
//             "indexed": true,
//             "internalType": "address",
//             "name": "verifier",
//             "type": "address"
//         }
//         ],
//         "name": "VerifierRemoved",
//         "type": "event"
//     },
//     {
//         "inputs": [
//         {
//             "internalType": "address",
//             "name": "_verifier",
//             "type": "address"
//         }
//         ],
//         "name": "addVerifier",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//         {
//             "internalType": "address",
//             "name": "_user",
//             "type": "address"
//         }
//         ],
//         "name": "approveKYC",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//         {
//             "internalType": "address",
//             "name": "_user",
//             "type": "address"
//         }
//         ],
//         "name": "getUserInfo",
//         "outputs": [
//         {
//             "internalType": "string",
//             "name": "",
//             "type": "string"
//         },
//         {
//             "internalType": "uint8",
//             "name": "",
//             "type": "uint8"
//         },
//         {
//             "internalType": "enum KYCRegistry.KYCStatus",
//             "name": "",
//             "type": "uint8"
//         }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [
//         {
//             "internalType": "address",
//             "name": "_user",
//             "type": "address"
//         }
//         ],
//         "name": "isUserVerified",
//         "outputs": [
//         {
//             "internalType": "bool",
//             "name": "",
//             "type": "bool"
//         }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [
//         {
//             "internalType": "address",
//             "name": "_verifier",
//             "type": "address"
//         }
//         ],
//         "name": "isVerifier",
//         "outputs": [
//         {
//             "internalType": "bool",
//             "name": "",
//             "type": "bool"
//         }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [
//         {
//             "internalType": "address",
//             "name": "",
//             "type": "address"
//         }
//         ],
//         "name": "kycVerifiers",
//         "outputs": [
//         {
//             "internalType": "bool",
//             "name": "",
//             "type": "bool"
//         }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "owner",
//         "outputs": [
//         {
//             "internalType": "address",
//             "name": "",
//             "type": "address"
//         }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     },
//     {
//         "inputs": [
//         {
//             "internalType": "address",
//             "name": "_user",
//             "type": "address"
//         },
//         {
//             "internalType": "string",
//             "name": "_reason",
//             "type": "string"
//         }
//         ],
//         "name": "rejectKYC",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//         {
//             "internalType": "address",
//             "name": "_verifier",
//             "type": "address"
//         }
//         ],
//         "name": "removeVerifier",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "renounceOwnership",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//         {
//             "internalType": "string",
//             "name": "_name",
//             "type": "string"
//         },
//         {
//             "internalType": "uint8",
//             "name": "_age",
//             "type": "uint8"
//         },
//         {
//             "internalType": "string",
//             "name": "_userId",
//             "type": "string"
//         }
//         ],
//         "name": "requestKYC",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//         {
//             "internalType": "address",
//             "name": "_user",
//             "type": "address"
//         }
//         ],
//         "name": "revokeKYC",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//         {
//             "internalType": "address",
//             "name": "newOwner",
//             "type": "address"
//         }
//         ],
//         "name": "transferOwnership",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [
//         {
//             "internalType": "address",
//             "name": "",
//             "type": "address"
//         }
//         ],
//         "name": "users",
//         "outputs": [
//         {
//             "internalType": "string",
//             "name": "name",
//             "type": "string"
//         },
//         {
//             "internalType": "uint8",
//             "name": "age",
//             "type": "uint8"
//         },
//         {
//             "internalType": "string",
//             "name": "userId",
//             "type": "string"
//         },
//         {
//             "internalType": "address",
//             "name": "wallet",
//             "type": "address"
//         },
//         {
//             "internalType": "enum KYCRegistry.KYCStatus",
//             "name": "status",
//             "type": "uint8"
//         },
//         {
//             "internalType": "uint256",
//             "name": "timestamp",
//             "type": "uint256"
//         }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     }
// ]
//     ;

//     window.onload = async function () {
//       if (window.ethereum) {
//         const web3 = new Web3(window.ethereum);
//         await window.ethereum.enable();
//         const contract = new web3.eth.Contract(abi, contractAddress);
//         const accounts = await web3.eth.getAccounts();

//         document.getElementById('deleteKYC').onclick = async () => {
//           const address = document.getElementById('deleteAddress').value;
//           try {
//             await contract.methods.revokeKYC(address).send({ from: accounts[0] });
//             alert('KYC successfully deleted!');
//           } catch (error) {
//             alert('Error deleting KYC!');
//           }
//         };
//       } else {
//         alert('Please install MetaMask or another Ethereum wallet to interact with this page.');
//       }
//     };



//update data for facth data from abi.json



window.onload = async function () {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();

        // Fetch the ABI from abi.json file
        try {
            const response = await fetch('abi.json');  // Fetch abi.json
            const abi = await response.json();         // Convert response to JSON

            const contractAddress = '0x4b03A3b8c9886b875b671007Fb5238ea3Ef995ca';
            const contract = new web3.eth.Contract(abi, contractAddress);

            document.getElementById('deleteKYC').onclick = async () => {
                const address = document.getElementById('deleteAddress').value;
                try {
                    await contract.methods.revokeKYC(address).send({ from: accounts[0] });
                    alert('KYC successfully deleted!');
                } catch (error) {
                    alert('Error deleting KYC!');
                }
            };
        } catch (error) {
            console.error('Error fetching ABI:', error);
            alert('Failed to load contract ABI.');
        }
    } else {
        alert('Please install MetaMask or another Ethereum wallet to interact with this page.');
    }
};
