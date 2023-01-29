<script lang="ts">
    import { account } from "../stores/account";
// import ConnectWallet from "./buttons/ConnectMetamaskWallet.svelte";
import TrimAcconut from "../utils/TrimAcconut.svelte";
    import ConnectMetamaskWallet from "./buttons/ConnectWallet.svelte";

    

</script>
<div class="topnav">
    <div><h1>Wallet Peeper</h1></div>
    <div class="topnav-right">
        {#if $account}
     <TrimAcconut />
        {:else}
        <ConnectMetamaskWallet />
        {/if}
    </div>
</div>




<style>
/* Add a black background color to the top navigation */
.topnav {
    /* background-color: #333; */
    overflow: hidden;
}

/* Style the links inside the navigation bar */
/* .topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
} */

/* Change the color of links on hover */
/* .topnav a:hover {
  background-color: #ddd;
  color: black;
} */

/* Add a color to the active/current link */
/* .topnav a.active {
  background-color: #035436;
  color: white;
} */

/* Right-aligned section inside the top navigation */
.topnav-right {
  float: right;
}
</style>
