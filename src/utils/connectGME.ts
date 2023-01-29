import { ethers } from "ethers";
import type { NFT } from "../domain/nft";
import { account } from "../stores/account";
import getNFTsFromAddress from "./getNFTsFromAddress";
import detectGamestopProvider from "@gamestopnft/detect-gamestop-provider";
import nfts from "../stores/nfts";

type EthWindow = {
    ethereum: any; //### TODO- get rid of the any type
};
async function connectGME() {
    const GMEprovider = await detectGamestopProvider();
    
    const provider = new ethers.providers.Web3Provider(GMEprovider);

    const accounts = await provider.send("eth_requestAccounts", []);
    const walletAccount = accounts[0];
    account.set(walletAccount);
    // console.log(provider);
    // console.log(accounts);
    // console.log($account);
    // // account.set("0x02e725b7e99091bd4ccbf15228384e160ecdf78f");
    const theNFTs: NFT[] = await getNFTsFromAddress(walletAccount);
    // console.log($account);
    console.log(theNFTs);
    nfts.set(theNFTs);
    // console.log("$nfts")
    //  console.log($nfts)

}
export default connectGME;