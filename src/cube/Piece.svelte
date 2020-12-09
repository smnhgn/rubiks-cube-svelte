<script>
  import Tile from "./Tile.svelte";
  import { tileConfigs, settings } from "../stores.js";
</script>

<div
  class="piece"
  style="
    transform: 
      rotateX({$settings.rotateX}deg) 
      rotateY({$settings.rotateY}deg);
    ">
  {#each $tileConfigs as config}
    <Tile {config} />
  {/each}
</div>

<style>
  .piece {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
  }
</style>
