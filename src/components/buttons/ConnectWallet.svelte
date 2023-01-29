<script lang="ts">
    import connectGME from "../../utils/connectGME";
    import connectMetamaskWallet from "../../utils/connectMetamaskWallet";
    import connectPhantom from "../../utils/connectPhantom";
 </script>


<button on:click={async () => {await connectMetamaskWallet();    }}>Connect Metamask Wallet</button>
<button on:click={async () => {await connectGME();    }}>Connect Gamestop Wallet</button>
<button on:click={async () => {await connectPhantom();    }}>Connect Phantom Wallet</button>

  
<style>
</style>
