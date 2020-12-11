<script>
  import Tile from "./Tile.svelte";
  import { tiles, settings } from "../stores.js";

  export let piece;
</script>

<div
  class="piece"
  style="
    width: {$settings.size}px; 
    height: {$settings.size}px;
    transform: 
      translateX({piece.translateX * $settings.size}px)
      translateY({piece.translateY * $settings.size}px)
      translateZ({piece.translateZ * $settings.size}px)
  ">
  {#each $tiles as tile}
    <Tile {tile} id={piece.id} />
  {/each}
</div>

<style>
  .piece {
    position: absolute;
    transform-style: preserve-3d;
  }
</style>
