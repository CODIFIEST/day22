import type { null_to_empty } from "svelte/internal";
import { writable } from "svelte/store";
import type {NFT} from "../domain/nft";
const nfts = writable<NFT[]>();
export default nfts;