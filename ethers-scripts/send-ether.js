const { ethers } = require("ethers");


const sender_pvt_key = "";
const receiver_address = "0x1d9B6C55cFf42668A004f8Db95f0aF59B2b666Ba";
const amount = ".05";

let provider = ethers.getDefaultProvider("goerli");
let sender_wallet = new ethers.Wallet(sender_pvt_key, provider);


let tx = {
    to: receiver_address,
    value: ethers.utils.parseEther(amount),
   };

   sender_wallet.sendTransaction(tx).then((result) => {
    console.log("txHash", result.hash);
   });