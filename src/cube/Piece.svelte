<script>
  import Tile from "./Tile.svelte";
  import { tileConfigs, settings } from "../stores.js";

  export let position = { top: 0, left: 0, right: 0, bottom: 0 };
</script>

<div
  class="piece"
  style="
    width: {$settings.size}px; 
    height: {$settings.size}px;
    top: {position.top};
    left: {position.left};
    right: {position.right};
    bottom: {position.bottom};
  ">
  {#each $tileConfigs as config}
    <Tile {config} />
  {/each}
</div>

<style>
  .piece {
    position: absolute;
    transform-style: preserve-3d;
  }
</style>
