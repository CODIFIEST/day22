import { NFTType, type NFT } from "../domain/nft";
// import * as sdk from "@loopring-web/loopring-sdk";
// export class LoopringAPIClass {
//   public static userAPI: UserAPI;
//   public static exchangeAPI: ExchangeAPI;
//   public static ammpoolAPI: AmmpoolAPI;
//   public static walletAPI: WalletAPI;
//   public static wsAPI: WsAPI;
//   public static nftAPI: NFTAPI;
//   public static delegate: DelegateAPI;
//   public static globalAPI: GlobalAPI;
//   public static contractAPI: typeof ContractAPI;
//   public static __chainId__: sdk.ChainId;
//   public static InitApi = (chainId: sdk.ChainId) => {
//     LoopringAPI.userAPI = new UserAPI({ chainId });
//     LoopringAPI.exchangeAPI = new ExchangeAPI({ chainId });
//     LoopringAPI.globalAPI = new GlobalAPI({ chainId });
//     LoopringAPI.ammpoolAPI = new AmmpoolAPI({ chainId });
//     LoopringAPI.walletAPI = new WalletAPI({ chainId });
//     LoopringAPI.wsAPI = new WsAPI({ chainId });
//     LoopringAPI.nftAPI = new NFTAPI({ chainId });
//     LoopringAPI.delegate = new DelegateAPI({ chainId });
//     LoopringAPI.__chainId__ = chainId;
//     LoopringAPI.contractAPI = ContractAPI;
//   };
// }
/* env:
 * test:  sdk.ChainId.GOERLI 
 * eth:  sdk.ChainId.MAINNET 
 */
// LoopringAPIClass.InitApi({sdk.ChainId.MAINNET}); 
// import  { UserAPI, generateKeyPair, ConnectorNames, KEY_MESSAGE,} from "@loopring-web/loopring-sdk"
// import axios from "axios";
// async function getLoopNFTs(address: string): Promise<NFT[]> {
//     const domainNFTs:NFT[]=[];
    
//     const userAPI = new UserAPI({
//          chainId:1
//     });

//     const accountInfo:{accountID:number} = await axios.get(`https://api3.loopring.io/api/v3/account?owner=${address}`

//     )
//     const eddsaKey = await generateKeyPair({
//        address:address,
//        isMobile:false,
//        walletType: ConnectorNames.MetaMask,
//        chainId:1,
//        keySeed: KEY_MESSAGE,
//        web3:null 
//     });
  
//     const apiKey = await userAPI.getUserApiKey({
//         accountId:accountInfo.accountID,

//     }, eddsaKey.sk);

//     const balances = await userAPI.getUserNFTBalances({
//         accountId:accountInfo.accountID
//     },  apiKey.apiKey);
    
//     balances.userNFTBalances.forEach(nft =>{
//         const domainNft:NFT = {
//             title: nft.collectionInfo.name,
//             imageURL: nft.metadata.uri,
//             description: nft.collectionInfo.description,
//             nftType: NFTType.Loopring,
//         }
//         domainNFTs.push(domainNft)
//     })
    
//     return domainNFTs;

// }
// export default getLoopNFTs