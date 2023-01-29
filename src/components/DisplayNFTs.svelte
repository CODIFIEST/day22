<script lang="ts">
    import type { NFT } from "../domain/nft";
    import nfts from "../stores/nfts";
    import Nft from "./NFT.svelte";
 
</script>

<div class="NFT-Container">
    {#if $nfts}
    <!-- {console.log("from displayNFTs.svelte ", $nfts)} -->
        <div class="nft-display">
            <div class="nft-row">
                {#each $nfts as nft}
                    {#if nft.imageURL}
                        <div class="nft-column">
                            <Nft {nft} />
                        </div>
                    {/if}
                {/each}
            </div>
        </div>
    {:else}
        Loading...
    {/if}
</div>

<style>
    .nft-row {
        display: flex;
        flex-wrap: wrap;
    }
    /* .nft-row img {
        border-radius: 8px;
        max-width: 200px;
    } */
    .nft-column {
        width: 24%;
    }
 
    .nft-display {
        display: flex;
        justify-content: center;
        margin: 11px 0px 0px 0px;
    }
    .NFT-Container {

        max-width: 1200px;
    margin: 0px auto;
    overflow: hidden;
    background-color: rgba(0, 0, 0, .6);
    }
    /* .max-width {
    max-width: 1000px;
    margin: 0px auto;
    overflow: hidden;
} */
    @media screen and (max-width: 600px) {
        .nft-row {
            display: flex;
            flex-direction: column;
        }

        .nft-column {
            width: 100%;
        }
    }
</style>
