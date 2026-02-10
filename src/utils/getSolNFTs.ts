import { NFTType, type NFT } from "../domain/nft";
import axios from "axios";

// Helper interface for the Helius DAS response structure
interface HeliusAsset {
  content?: {
    metadata?: {
      name?: string;
      description?: string;
    };
    links?: {
      image?: string;
    };
    files?: {
      uri?: string;
    }[];
  };
}

async function getSolNFTs(address: string): Promise<NFT[]> {
  // Ensure you add VITE_HELIUS_API_KEY to your .env file
  // Example: VITE_HELIUS_API_KEY=your-api-key-here
  const apiKey = import.meta.env.VITE_HELIUS_API_KEY;
  
  if (!apiKey) {
    console.error("VITE_HELIUS_API_KEY is missing from environment variables");
    return [];
  }

  const url = `https://mainnet.helius-rpc.com/?api-key=${apiKey}`;

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
    const response = await axios.post(url, data, config);
    const domainNFTs: NFT[] = [];

    // Helius returns items in result.items, unlike QuickNode's result.assets
    if (response.data.result && response.data.result.items) {
      response.data.result.items.forEach((asset: HeliusAsset) => {
        // Helius stores metadata in 'content.metadata' and images in 'content.links'
        // We use optional chaining and fallbacks to prevent crashes on missing data
        const title = asset.content?.metadata?.name || "Unknown NFT";
        const description = asset.content?.metadata?.description || "";
        
        // Helius prioritizes the CDN image link, but falls back to the raw file URI
        const imageURL = asset.content?.links?.image || asset.content?.files?.[0]?.uri || "";

        const eachNFT: NFT = {
          title: title,
          description: description,
          imageURL: imageURL,
          nftType: NFTType.Solana,
        };

        domainNFTs.push(eachNFT);
      });
    }

    // console.log("Mapped Helius NFTs:", domainNFTs);
    return domainNFTs;

  } catch (error) {
    console.error("Error fetching Solana NFTs via Helius:", error);
    return [];
  }
}

export default getSolNFTs;