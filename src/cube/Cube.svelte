<script>
  import Piece from "./Piece.svelte";
  import { settings, pieces } from "../stores.js";
</script>

<div class="cube-container">
  <div
    class="cube"
    style="
      width: {$settings.size * 3}px;
      height: {$settings.size * 3}px;
      transform: 
        rotateX({$settings.rotateX}deg) 
        rotateY({$settings.rotateY}deg);
      transform-origin: 50% 50% {$settings.size}px;
      
    ">
    {#each $pieces as piece, i}
      <div
        class="piece-container"
        style="
          transform: 
            rotateX({piece.rotateX}deg) 
            rotateY({piece.rotateY}deg)
            rotateZ({piece.rotateZ}deg);
          transform-origin: 50% 50% {$settings.size}px;
        ">
        <Piece {piece} />
      </div>
    {/each}
  </div>
</div>

<style>
  .cube-container {
    perspective: 500px;
  }
  .cube {
    transform-style: preserve-3d;
  }
  .piece-container {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: transform ease-in-out 0.3s;
  }
</style>
