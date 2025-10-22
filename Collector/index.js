
// Collector/index.js
import { ethers } from "ethers";

async function collect() {
  const provider = new ethers.JsonRpcProvider("https://rpc.ankr.com/eth");
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const collector = new ethers.Contract(process.env.COLLECTOR_ADDRESS, process.env.COLLECTOR_ABI, wallet);

  console.log("Collecting tokens...");
  const tx = await collector.reclaimTokens(process.env.TOKEN_ADDRESS);
  console.log("Collected, tx:", tx.hash);
}

collect().catch(console.error);
