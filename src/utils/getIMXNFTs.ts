import { NFTType, type NFT } from "../domain/nft";
import { ImmutableX, Config } from '@imtbl/core-sdk';


async function getIMXNFTs(address: string): Promise<NFT[]> {
    const config = Config.PRODUCTION; // Or PRODUCTION
    const client = new ImmutableX(config);
    const IMXNFTs = await client.assetApi.listAssets({ user: address })
    const IMXdomainNFTs:NFT[]=[];

    IMXNFTs.data.result.forEach(nft=>{
        if(!nft.name) return;
        const eachNFT:NFT ={
            title:nft.name,
            description:nft.collection.name,
            imageURL: nft.image_url,
            nftType: NFTType.IMX
        }
        IMXdomainNFTs.push(eachNFT)
        console.log(IMXdomainNFTs)
    })

    return IMXdomainNFTs;

}
export default getIMXNFTs