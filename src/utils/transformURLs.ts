// import type { nft } from "../components/NFT.svelte";
// import { nfts } from "../stores/nfts";

function transformURLs(imageURL:string):string{
    if (imageURL.startsWith(`ipfs://`)) {
        // console.log(imageUrl)
        imageURL = "https://ipfs.io/ipfs/" + imageURL.slice(7)
    }
    return imageURL;
}
export default transformURLs;