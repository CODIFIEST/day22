import getSolNFTs from "./getSolNFTs";
// import { walletStore } from "@svelte-on-solana/wallet-adapter-core";
import { account } from "../stores/account";
// import { NftSaleMarketplace } from "alchemy-sdk";
import nfts from "../stores/nfts";

async function connectPhantom (){
    console.log("test account", account)
    const phantom = await (window as any).phantom.solana.connect();
    console.log("do we get phantom", phantom)
    const addy = (window as any).phantom.solana.publicKey.toString();
    console.log((window as any).phantom.solana)
    console.log("address resolved here")
    console.log(addy)
    account.set(addy)
    // console.log("thsi is the " , account)
    const SOLNFTs = await getSolNFTs(addy)
    console.log("Sol NFTs")
    console.log(SOLNFTs)
   nfts.set(SOLNFTs);
    // console.log(walletStore)
}
export default connectPhantom;