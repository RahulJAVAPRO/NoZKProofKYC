
    // const contractAddress = '0x4b03A3b8c9886b875b671007Fb5238ea3Ef995ca'; // Your contract address
    // const abi = [
    //   {
    //     "inputs": [
    //       {
    //         "internalType": "address",
    //         "name": "_user",
    //         "type": "address"
    //       }
    //     ],
    //     "name": "getUserInfo",
    //     "outputs": [
    //       {
    //         "internalType": "string",
    //         "name": "",
    //         "type": "string"
    //       },
    //       {
    //         "internalType": "uint8",
    //         "name": "",
    //         "type": "uint8"
    //       },
    //       {
    //         "internalType": "enum KYCRegistry.KYCStatus",
    //         "name": "",
    //         "type": "uint8"
    //       }
    //     ],
    //     "stateMutability": "view",
    //     "type": "function"
    //   },
    //   {
    //     "inputs": [
    //       {
    //         "internalType": "address",
    //         "name": "_user",
    //         "type": "address"
    //       }
    //     ],
    //     "name": "isUserVerified",
    //     "outputs": [
    //       {
    //         "internalType": "bool",
    //         "name": "",
    //         "type": "bool"
    //       }
    //     ],
    //     "stateMutability": "view",
    //     "type": "function"
    //   }
    // ];

    // window.onload = async function () {
    //   if (window.ethereum) {
    //     const web3 = new Web3(window.ethereum);
    //     await window.ethereum.enable();
    //     const contract = new web3.eth.Contract(abi, contractAddress);

    //     document.getElementById('checkStatus').onclick = async () => {
    //       const address = document.getElementById('checkAddress').value;
    //       if (!web3.utils.isAddress(address)) {
    //         alert('Please enter a valid Ethereum address!');
    //         return;
    //       }

    //       try {
    //         // Check if the user has requested KYC or is verified
    //         const userVerified = await contract.methods.isUserVerified(address).call();
    //         if (!userVerified) {
    //           document.getElementById('userInfo').innerHTML = `No KYC request found for address: ${address}`;
    //           return;
    //         }

    //         // Fetch user information if they have requested KYC
    //         const userInfo = await contract.methods.getUserInfo(address).call();
    //         const status = ["Unverified", "Pending", "Verified", "Rejected"];
    //         document.getElementById('userInfo').innerHTML = `
    //           <b>Name:</b> ${userInfo[0]} <br>
    //           <b>Age:</b> ${userInfo[1]} <br>
    //           <b>KYC Status:</b> ${status[userInfo[2]]}
    //         `;
    //       } catch (error) {
    //         console.error(error);
    //         alert('Error fetching KYC status! The user may not have requested KYC or an issue occurred.');
    //       }
    //     };
    //   } else {
    //     alert('Please install MetaMask or another Ethereum wallet to interact with this page.');
    //   }
    // };



    //update data facth from abi.json


    window.onload = async function () {
      if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          await window.ethereum.enable();
  
          // Fetch ABI from abi.json
          try {
              const response = await fetch('abi.json');
              const abi = await response.json();
              const contractAddress = '0x4b03A3b8c9886b875b671007Fb5238ea3Ef995ca';
              const contract = new web3.eth.Contract(abi, contractAddress);
  
              document.getElementById('checkStatus').onclick = async () => {
                  const address = document.getElementById('checkAddress').value;
                  if (!web3.utils.isAddress(address)) {
                      alert('Please enter a valid Ethereum address!');
                      return;
                  }
  
                  try {
                      // Check if the user has requested KYC or is verified
                      const userVerified = await contract.methods.isUserVerified(address).call();
                      if (!userVerified) {
                          document.getElementById('userInfo').innerHTML = `No KYC request found for address: ${address}`;
                          return;
                      }
  
                      // Fetch user information
                      const userInfo = await contract.methods.getUserInfo(address).call();
                      const status = ["Unverified", "Pending", "Verified", "Rejected"];
                      document.getElementById('userInfo').innerHTML = `
                          <b>Name:</b> ${userInfo[0]} <br>
                          <b>Age:</b> ${userInfo[1]} <br>
                          <b>KYC Status:</b> ${status[userInfo[2]]}
                      `;
                  } catch (error) {
                      console.error(error);
                      alert('Error fetching KYC status! The user may not have requested KYC or an issue occurred.');
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
  
