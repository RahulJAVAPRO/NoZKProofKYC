// Connect to the Ethereum provider (MetaMask)
window.ethereum.request({ method: "eth_requestAccounts" }).then(accounts => {
    const userAddress = accounts[0];
    console.log("Connected address:", userAddress);
  }).catch(error => {
    console.error("User denied account access", error);
  });
  
  const contractAddress = "0x4b03A3b8c9886b875b671007Fb5238ea3Ef995ca"; // Replace with your contract address
  const contractABI = [
    {
      "inputs": [
        { "internalType": "string", "name": "_name", "type": "string" },
        { "internalType": "uint8", "name": "_age", "type": "uint8" },
        { "internalType": "string", "name": "_userId", "type": "string" }
      ],
      "name": "requestKYC",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
  
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const kycContract = new ethers.Contract(contractAddress, contractABI, signer);
  
  document.getElementById('kycForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const userId = document.getElementById('userId').value;
  
    try {
      // Call the requestKYC function from the contract
      const tx = await kycContract.requestKYC(name, age, userId);
      document.getElementById('status').innerText = "Transaction sent. Waiting for confirmation...";
  
      // Wait for transaction confirmation
      await tx.wait();
      document.getElementById('status').innerText = "KYC Request submitted successfully!";
    } catch (error) {
      console.error("Error submitting KYC:", error);
      document.getElementById('status').innerText = "Error submitting KYC request!";
    }
  });
  