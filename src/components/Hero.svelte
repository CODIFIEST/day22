<script lang="ts">
    import connectGME from "../utils/connectGME";
import connectMetamaskWallet from "../utils/connectMetamaskWallet";
    import connectPhantom from "../utils/connectPhantom";

</script>

<div style="display: block;">
    <h1 class ="darker-backgrond">Connect your wallet to view your NFTs</h1><br>


<div class="nft-wallets">

   
     <img
        class="wallet-image"
        src= 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg'
        alt="metamask Fox"
        on:keypress={async () => {
            await connectMetamaskWallet();
        }}
        on:click={async () => {
            await connectMetamaskWallet();
        }}
    />
     <img 
        class = "wallet-image"
        alt = "phantom wallet"
        src = './src/assets/phantom-icon-purple.png'
        on:click={
            async ()=>{
                await connectPhantom();
            }
        }
        on:keypress={
            async ()=>{
                await connectPhantom();
            }
        }
    >
    <img 
    src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Logo_GameStop.svg" 
    alt="gamestop wallet"
    class="wallet-image"
    on:click={
        async ()=>{
            await connectGME();
        }
    }
    on:keypress={
       async () => {
        await connectGME();
        
       }
    }
    >
</div>
</div>

<style>
    h1{
        background-color: rgba(0, 0, 0, 0.4);
    }
        .nft-wallets {
        display: flex;
        flex-wrap: wrap;
        /* flex-direction: column; */
        justify-content: center;
        max-width: 600px;
     
        
        /* this will be the container for all the wallets */
    }
    .wallet-image {
        /* display: flex;
        justify-content: center; */
        width: 49%
      
    }

    /* .centered {
        text-align: center;
        font-size: large;
        opacity: 1;
    }
     */
    /* .eth-wallets {
    }
    .sol-wallets {
    } */
</style>
