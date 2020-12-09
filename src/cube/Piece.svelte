<script>
  import Tile from "./Tile.svelte";
  import { tileConfigs, settings } from "../stores.js";

  export let position = { x: 0, y: 0, z: 0 };
</script>

<div
  class="piece"
  style="
    width: {$settings.size}px; 
    height: {$settings.size}px;
    transform: 
      translateX({position.x})
      translateY({position.y})
      translateZ({position.z})
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
