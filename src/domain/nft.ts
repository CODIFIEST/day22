enum NFTType{
    Ethereum,
    IMX,
    Solana,
    Loopring,
}
type NFT ={
    title:string,
    description:string,
    imageURL:string,
    nftType:NFTType
}

export type  { NFT } 
export {NFTType}