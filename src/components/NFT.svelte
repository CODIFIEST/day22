<script lang="ts">
    import type { NFT } from "../domain/nft";
    import transformURLs from "../utils/transformURLs";
    export let nft: NFT;
    import truncateString from "../utils/truncateString";
</script>

{#if (nft.title)}
    <div>
        <h2>{nft.title}</h2>
        <br />
        {#if nft.description}
        <p>{truncateString(nft.description, 20)}</p>
        {:else}
      <p>There is no description available</p>
        {/if}
        <br />
        <div class = "the-NFT">
        <img src={transformURLs(nft.imageURL)} alt="" /> <br />
        <!-- {transformURLs(nft.imageURL)} -->
    </div>
    </div>
{/if}

<style>
    p {
        text-align: center;
    }
    .the-NFT{
        display: flex;
        justify-content: center;

    }
    img {
        border-radius: 8px;
    max-width: 200px;
/* 
  justify-content: center; */
    }
    .the-NFT {
        margin: 0 auto;
    }
    h2{
        text-align: center;
/* 
    font-size: 16px;
    font-weight: 500; */
    color: #b4bbc3;

    }
</style>
