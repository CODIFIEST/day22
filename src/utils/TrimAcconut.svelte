<script lang="ts">
    import { account } from "../stores/account";


    let displayedAccount = $account

    displayedAccount = displayedAccount.substring(0,4) + "..." + displayedAccount.substring($account.length-4, $account.length)

</script>

{displayedAccount}