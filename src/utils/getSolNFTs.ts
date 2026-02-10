import { NFTType, type NFT } from "../domain/nft";
import axios from "axios";

async function getSolNFTs(address: string): Promise<NFT[]> {
    const apiKey = import.meta.env.VITE_HELIUS_API_KEY;

    // DEBUGGING LOGS
    console.log("---------------- DEBUG ----------------");
    console.log("API Key exists:", !!apiKey); 
    console.log("Target Address:", address);
    
    // Safety check for API Key
    if (!apiKey) {
        console.error("❌ ERROR: VITE_HELIUS_API_KEY is missing. Did you restart the server?");
        return []; 
    }

    const url = `https://mainnet.helius-rpc.com/?api-key=${apiKey}`;
    console.log("Request URL:", url); // Ensure this prints a valid URL
    console.log("---------------------------------------");

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const data = {
        jsonrpc: "2.0",
        id: "helius-nft-fetch",
        method: "getAssetsByOwner",
        params: {
            ownerAddress: address,
            page: 1,
            limit: 100,
            displayOptions: {
                showFungible: false,
                showNativeBalance: false,
            },
        },
    };

    try {
        // We pass 'url' here, which is guaranteed to be a string now
        const response = await axios.post(url, data, config);
        
        const domainNFTs: NFT[] = [];
        if (response.data.result && response.data.result.items) {
            response.data.result.items.forEach((asset: any) => {
                const title = asset.content?.metadata?.name || "Unknown NFT";
                const description = asset.content?.metadata?.description || "";
                const imageURL = asset.content?.links?.image || asset.content?.files?.[0]?.uri || "";

                domainNFTs.push({
                    title,
                    description,
                    imageURL,
                    nftType: NFTType.Solana,
                });
            });
        }
        return domainNFTs;

    } catch (error) {
        console.error("Error fetching Solana NFTs:", error);
        return [];
    }
}

export default getSolNFTs;