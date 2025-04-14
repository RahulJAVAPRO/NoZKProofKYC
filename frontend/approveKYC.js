
    // const contractAddress = '0x4b03A3b8c9886b875b671007Fb5238ea3Ef995ca'; // Your contract address
    // const abi = [
    // {
    //     "inputs": [],
    //     "stateMutability": "nonpayable",
    //     "type": "constructor"
    // },
    // {
    //     "inputs": [
    //     {
    //         "internalType": "address",
    //         "name": "owner",
    //         "type": "address"
    //     }
    //     ],
    //     "name": "OwnableInvalidOwner",
    //     "type": "error"
    // },
    // {
    //     "inputs": [
    //     {
    //         "internalType": "address",
    //         "name": "account",
    //         "type": "address"
    //     }
    //     ],
    //     "name": "OwnableUnauthorizedAccount",
    //     "type": "error"
    // },
    // {
    //     "anonymous": false,
    //     "inputs": [
    //     {
    //         "indexed": true,
    //         "internalType": "address",
    //         "name": "user",
    //         "type": "address"
    //     }
    //     ],
    //     "name": "KYCApproved",
    //     "type": "event"
    // },
    // {
    //     "anonymous": false,
    //     "inputs": [
    //     {
    //         "indexed": true,
    //         "internalType": "address",
    //         "name": "user",
    //         "type": "address"
    //     },
    //     {
    //         "indexed": false,
    //         "internalType": "string",
    //         "name": "reason",
    //         "type": "string"
    //     }
    //     ],
    //     "name": "KYCRejected",
    //     "type": "event"
    // },
    // {
    //     "anonymous": false,
    //     "inputs": [
    //     {
    //         "indexed": true,
    //         "internalType": "address",
    //         "name": "user",
    //         "type": "address"
    //     },
    //     {
    //         "indexed": false,
    //         "internalType": "string",
    //         "name": "userId",
    //         "type": "string"
    //     }
    //     ],
    //     "name": "KYCRequested",
    //     "type": "event"
    // },
    // {
    //     "anonymous": false,
    //     "inputs": [
    //     {
    //         "indexed": true,
    //         "internalType": "address",
    //         "name": "user",
    //         "type": "address"
    //     }
    //     ],
    //     "name": "KYCRevoked",
    //     "type": "event"
    // },
    // {
    //     "anonymous": false,
    //     "inputs": [
    //     {
    //         "indexed": true,
    //         "internalType": "address",
    //         "name": "previousOwner",
    //         "type": "address"
    //     },
    //     {
    //         "indexed": true,
    //         "internalType": "address",
    //         "name": "newOwner",
    //         "type": "address"
    //     }
    //     ],
    //     "name": "OwnershipTransferred",
    //     "type": "event"
    // },
    // {
    //     "anonymous": false,
    //     "inputs": [
    //     {
    //         "indexed": true,
    //         "internalType": "address",
    //         "name": "verifier",
    //         "type": "address"
    //     }
    //     ],
    //     "name": "VerifierAdded",
    //     "type": "event"
    // },
    // {
    //     "anonymous": false,
    //     "inputs": [
    //     {
    //         "indexed": true,
    //         "internalType": "address",
    //         "name": "verifier",
    //         "type": "address"
    //     }
    //     ],
    //     "name": "VerifierRemoved",
    //     "type": "event"
    // },
    // {
    //     "inputs": [
    //     {
    //         "internalType": "address",
    //         "name": "_verifier",
    //         "type": "address"
    //     }
    //     ],
    //     "name": "addVerifier",
    //     "outputs": [],
    //     "stateMutability": "nonpayable",
    //     "type": "function"
    // },
    // {
    //     "inputs": [
    //     {
    //         "internalType": "address",
    //         "name": "_user",
    //         "type": "address"
    //     }
    //     ],
    //     "name": "approveKYC",
    //     "outputs": [],
    //     "stateMutability": "nonpayable",
    //     "type": "function"
    // },
    // {
    //     "inputs": [
    //     {
    //         "internalType": "address",
    //         "name": "_user",
    //         "type": "address"
    //     }
    //     ],
    //     "name": "getUserInfo",
    //     "outputs": [
    //     {
    //         "internalType": "string",
    //         "name": "",
    //         "type": "string"
    //     },
    //     {
    //         "internalType": "uint8",
    //         "name": "",
    //         "type": "uint8"
    //     },
    //     {
    //         "internalType": "enum KYCRegistry.KYCStatus",
    //         "name": "",
    //         "type": "uint8"
    //     }
    //     ],
    //     "stateMutability": "view",
    //     "type": "function"
    // },
    // {
    //     "inputs": [
    //     {
    //         "internalType": "address",
    //         "name": "_user",
    //         "type": "address"
    //     }
    //     ],
    //     "name": "isUserVerified",
    //     "outputs": [
    //     {
    //         "internalType": "bool",
    //         "name": "",
    //         "type": "bool"
    //     }
    //     ],
    //     "stateMutability": "view",
    //     "type": "function"
    // },
    // {
    //     "inputs": [
    //     {
    //         "internalType": "address",
    //         "name": "_verifier",
    //         "type": "address"
    //     }
    //     ],
    //     "name": "isVerifier",
    //     "outputs": [
    //     {
    //         "internalType": "bool",
    //         "name": "",
    //         "type": "bool"
    //     }
    //     ],
    //     "stateMutability": "view",
    //     "type": "function"
    // },
    // {
    //     "inputs": [
    //     {
    //         "internalType": "address",
    //         "name": "",
    //         "type": "address"
    //     }
    //     ],
    //     "name": "kycVerifiers",
    //     "outputs": [
    //     {
    //         "internalType": "bool",
    //         "name": "",
    //         "type": "bool"
    //     }
    //     ],
    //     "stateMutability": "view",
    //     "type": "function"
    // },
    // {
    //     "inputs": [],
    //     "name": "owner",
    //     "outputs": [
    //     {
    //         "internalType": "address",
    //         "name": "",
    //         "type": "address"
    //     }
    //     ],
    //     "stateMutability": "view",
    //     "type": "function"
    // },
    // {
    //     "inputs": [
    //     {
    //         "internalType": "address",
    //         "name": "_user",
    //         "type": "address"
    //     },
    //     {
    //         "internalType": "string",
    //         "name": "_reason",
    //         "type": "string"
    //     }
    //     ],
    //     "name": "rejectKYC",
    //     "outputs": [],
    //     "stateMutability": "nonpayable",
    //     "type": "function"
    // },
    // {
    //     "inputs": [
    //     {
    //         "internalType": "address",
    //         "name": "_verifier",
    //         "type": "address"
    //     }
    //     ],
    //     "name": "removeVerifier",
    //     "outputs": [],
    //     "stateMutability": "nonpayable",
    //     "type": "function"
    // },
    // {
    //     "inputs": [],
    //     "name": "renounceOwnership",
    //     "outputs": [],
    //     "stateMutability": "nonpayable",
    //     "type": "function"
    // },
    // {
    //     "inputs": [
    //     {
    //         "internalType": "string",
    //         "name": "_name",
    //         "type": "string"
    //     },
    //     {
    //         "internalType": "uint8",
    //         "name": "_age",
    //         "type": "uint8"
    //     },
    //     {
    //         "internalType": "string",
    //         "name": "_userId",
    //         "type": "string"
    //     }
    //     ],
    //     "name": "requestKYC",
    //     "outputs": [],
    //     "stateMutability": "nonpayable",
    //     "type": "function"
    // },
    // {
    //     "inputs": [
    //     {
    //         "internalType": "address",
    //         "name": "_user",
    //         "type": "address"
    //     }
    //     ],
    //     "name": "revokeKYC",
    //     "outputs": [],
    //     "stateMutability": "nonpayable",
    //     "type": "function"
    // },
    // {
    //     "inputs": [
    //     {
    //         "internalType": "address",
    //         "name": "newOwner",
    //         "type": "address"
    //     }
    //     ],
    //     "name": "transferOwnership",
    //     "outputs": [],
    //     "stateMutability": "nonpayable",
    //     "type": "function"
    // },
    // {
    //     "inputs": [
    //     {
    //         "internalType": "address",
    //         "name": "",
    //         "type": "address"
    //     }
    //     ],
    //     "name": "users",
    //     "outputs": [
    //     {
    //         "internalType": "string",
    //         "name": "name",
    //         "type": "string"
    //     },
    //     {
    //         "internalType": "uint8",
    //         "name": "age",
    //         "type": "uint8"
    //     },
    //     {
    //         "internalType": "string",
    //         "name": "userId",
    //         "type": "string"
    //     },
    //     {
    //         "internalType": "address",
    //         "name": "wallet",
    //         "type": "address"
    //     },
    //     {
    //         "internalType": "enum KYCRegistry.KYCStatus",
    //         "name": "status",
    //         "type": "uint8"
    //     },
    //     {
    //         "internalType": "uint256",
    //         "name": "timestamp",
    //         "type": "uint256"
    //     }
    //     ],
    //     "stateMutability": "view",
    //     "type": "function"
    // }
    // ];

    // window.onload = async function () {
    //   if (window.ethereum) {
    //     const web3 = new Web3(window.ethereum);
    //     await window.ethereum.enable();
    //     const contract = new web3.eth.Contract(abi, contractAddress);

    //     document.getElementById('approveKYCButton').onclick = async () => {
    //       const address = document.getElementById('approveAddress').value;
    //       if (!web3.utils.isAddress(address)) {
    //         alert('Please enter a valid Ethereum address!');
    //         return;
    //       }

    //       try {
    //         const accounts = await web3.eth.getAccounts();
    //         const sender = accounts[0];

    //         await contract.methods.approveKYC(address).send({ from: sender });
    //         document.getElementById('status').innerHTML = `KYC approved for address: ${address}`;
    //       } catch (error) {
    //         console.error(error);
    //         alert('Error approving KYC. Make sure you are connected to the correct network.');
    //       }
    //     };
    //     document.getElementById('rejectKYCButton').onclick = async () => {
    //         const address = document.getElementById('rejectAddress').value;
    //         const reason = document.getElementById('rejectReason').value;
      
    //         if (!web3.utils.isAddress(address)) {
    //           alert('Please enter a valid Ethereum address!');
    //           return;
    //         }
    //         if (!reason) {
    //           alert('Please enter a reason for rejection!');
    //           return;
    //         }
      
    //         try {
    //           const accounts = await web3.eth.getAccounts();
    //           const sender = accounts[0];
      
    //           await contract.methods.rejectKYC(address, reason).send({ from: sender });
    //           document.getElementById('status').innerHTML = `KYC rejected for address: ${address} <br> Reason: ${reason}`;
    //         } catch (error) {
    //           console.error(error);
    //           alert('Error rejecting KYC. Make sure you are connected to the correct network.');
    //         }
    //       };
    //   } else {
    //     alert('Please install MetaMask or another Ethereum wallet to interact with this page.');
    //   }
    // };




    // data facth from abi.json updated

    window.onload = async function () {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
    
            // Fetch ABI from abi.json file
            try {
                const response = await fetch('abi.json');
                const abi = await response.json();
                const contractAddress = '0x4b03A3b8c9886b875b671007Fb5238ea3Ef995ca';
                const contract = new web3.eth.Contract(abi, contractAddress);
    
                // Approve KYC
                document.getElementById('approveKYCButton').onclick = async () => {
                    const address = document.getElementById('approveAddress').value;
                    if (!web3.utils.isAddress(address)) {
                        alert('Please enter a valid Ethereum address!');
                        return;
                    }
    
                    try {
                        const accounts = await web3.eth.getAccounts();
                        const sender = accounts[0];
    
                        await contract.methods.approveKYC(address).send({ from: sender });
                        document.getElementById('status').innerHTML = `KYC approved for address: ${address}`;
                    } catch (error) {
                        console.error(error);
                        alert('Error approving KYC. Make sure you are connected to the correct network.');
                    }
                };
    
                // Reject KYC
                document.getElementById('rejectKYCButton').onclick = async () => {
                    const address = document.getElementById('rejectAddress').value;
                    const reason = document.getElementById('rejectReason').value;
    
                    if (!web3.utils.isAddress(address)) {
                        alert('Please enter a valid Ethereum address!');
                        return;
                    }
                    if (!reason) {
                        alert('Please enter a reason for rejection!');
                        return;
                    }
    
                    try {
                        const accounts = await web3.eth.getAccounts();
                        const sender = accounts[0];
    
                        await contract.methods.rejectKYC(address, reason).send({ from: sender });
                        document.getElementById('status').innerHTML = `KYC rejected for address: ${address} <br> Reason: ${reason}`;
                    } catch (error) {
                        console.error(error);
                        alert('Error rejecting KYC. Make sure you are connected to the correct network.');
                    }
                };
    
            } catch (error) {
                console.error("Failed to load ABI file:", error);
                alert("Failed to load contract ABI.");
            }
        } else {
            alert('Please install MetaMask or another Ethereum wallet to interact with this page.');
        }
    };
    
