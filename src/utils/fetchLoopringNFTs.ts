import { NFTType, type NFT } from "../domain/nft";
import {
  UserAPI,
  generateKeyPair,
  ConnectorNames,
  NFTAPI,
} from "@loopring-web/loopring-sdk";
import axios from "axios";
import Web3 from "web3";
async function fetchLoopringNfts(address: string): Promise<NFT[]> {
  const domainNfts: NFT[] = [];

  const userAPI = new UserAPI({
    chainId: 1,
  });

  const accountInfo = await axios.get(
    `https://api3.loopring.io/api/v3/account?owner=${address}`
  );
  console.log(accountInfo);

  const web3: Web3 = new Web3((window as any).ethereum);
  const eddsaKey = await generateKeyPair({
    isMobile: false,
    address: address,
    walletType: ConnectorNames.MetaMask,
    chainId: 1,
    keySeed:
      "Sign this message to access Loopring Exchange: 0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4 with key nonce: 0",
    web3: web3,
  });

  const apiKey = await userAPI.getUserApiKey(
    {
      accountId: accountInfo.data.accountId,
    },
    eddsaKey.sk
  );

  const balances = await userAPI.getUserNFTBalances(
    {
      accountId: accountInfo.data.accountId,
    },
    apiKey.apiKey
  );

  balances.userNFTBalances.map((nft) => {
    const domainNft: NFT = {
      title: nft.collectionInfo.name,
      imageURL: nft.metadata?.uri,
      description: nft.collectionInfo.description,
      nftType: NFTType.Loopring,
    };

    domainNfts.push(domainNft);
  });

  return domainNfts;
}

export {fetchLoopringNfts};