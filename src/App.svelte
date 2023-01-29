<script lang="ts">
    import DisplayNfTs from "./components/DisplayNFTs.svelte";
    import Hero from "./components/Hero.svelte";
    import Navbar from "./components/Navbar.svelte";
    import { account } from "./stores/account";
 
 </script>
<!-- <Navbar/> -->
{#if $account}
<!-- {console.log("front page ", $account)} -->
<DisplayNfTs />
{:else}
<Hero />
{/if}
<style>

</style>