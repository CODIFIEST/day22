import { NFTType, type NFT } from "../domain/nft";
// not currently supported by solanaJS
 import axios from "axios";
// import  dotenv from "dotenv"
// dotenv.config();
// dotenv.config({ path: `../../.env`} )
// require('dotenv').config()
// declare var process : {
//     env: {
//       VITE_QUICKNODE_APK: string
//     }
//   }

 async function getSolNFTs(address: string): Promise<NFT[]> {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const data = {
        jsonrpc: "2.0",
        id: 1,
        method: "qn_fetchNFTs",
        params: {
            wallet: address,
            omitFields: ["provenance", "traits"],
            page: 1,
            perPage: 100,
        },
    };
    // console.log("address")
    // console.log(address)
//  console.log(import.meta.env.VITE_QUICKNODE_APK)

    const quiknodeNFTs = await axios.post(import.meta.env.VITE_QUICKNODE_APK, data, config)
    // console.log(import.meta.env.VITE_QUICKNODE_APK)
    // console.log("solana wallet data")
    // console.log (quiknodeNFTs)
    const domainNFTs:NFT[] =[];
    quiknodeNFTs.data.result.assets.forEach(nft =>{
        
        const eachNFT:NFT ={
            title: nft.name,
            description:nft.description,
            imageURL: nft.imageUrl,
            nftType: NFTType.Solana
        }
        // console.log("inside getSOLNFTS imgURL", nft.imageURL)
        // console.log("all the assets ",quiknodeNFTs.data.result.assets)
        domainNFTs.push(eachNFT)

        // console.log(domainNFTs)
    })
    // axios
    //     .post("https://nameless-falling-market.solana-devnet.discover.quiknode.pro/1251a9caf84a2d2c0b0b318b1b6ddcd57f326d80/", data, config)
    //     .then(function (response) {
    //         // handle success
    //         // console.log("solana wallet data")
    //         // console.log(response.data);
          
    //     })
    //     .catch((err) => {
    //         // handle error
    //         console.log(err);
          
    //     });
    console.log(domainNFTs)
        return domainNFTs;
};


export default getSolNFTs