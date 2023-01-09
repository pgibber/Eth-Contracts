const { ethers } = require("ethers");

const sender_pvt_key =
    "";

let provider = ethers.getDefaultProvider("goerli");
let sender_wallet = new ethers.Wallet(sender_pvt_key, provider);

const contract_address = "0x59aDd102541510d00e6817F85Cae62f508c2F26D";
const contract_ABI = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
        inputs: [],
        name: "decrement",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "increment",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "variable",
        outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
        stateMutability: "view",
        type: "function",
    },
];

const contract = new ethers.Contract(contract_address, contract_ABI, provider);

async function interact() {
    const value = await contract.variable();
    console.log(value);
    const contractWithSigner = contract.connect(sender_wallet);

    const tx = await contractWithSigner.decrement();
    await tx.wait();
    console.log("Tx Hash: ", tx.hash);
    const newValue = await contract.variable();
    console.log("Current Value: ", newValue);
}
interact();