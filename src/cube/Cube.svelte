<script>
  import { onDestroy } from "svelte";
  import Piece from "./Piece.svelte";
  import { settings } from "../stores.js";

  let piecePositions;

  const unsubscribe = settings.subscribe(({ size }) => {
    piecePositions = [
      // Layer 1
      { x: 0, y: 0, z: 0 },
      { x: 0, y: `${size}px`, z: 0 },
      { x: 0, y: `${2 * size}px`, z: 0 },
      { x: `${size}px`, y: 0, z: 0 },
      { x: `${size}px`, y: `${size}px`, z: 0 },
      { x: `${size}px`, y: `${2 * size}px`, z: 0 },
      { x: `${2 * size}px`, y: 0, z: 0 },
      { x: `${2 * size}px`, y: `${size}px`, z: 0 },
      { x: `${2 * size}px`, y: `${2 * size}px`, z: 0 },
      // Layer 2
      { x: 0, y: 0, z: `${size}px` },
      { x: 0, y: `${size}px`, z: `${size}px` },
      { x: 0, y: `${2 * size}px`, z: `${size}px` },
      { x: `${size}px`, y: 0, z: `${size}px` },
      { x: `${size}px`, y: `${size}px`, z: `${size}px` },
      { x: `${size}px`, y: `${2 * size}px`, z: `${size}px` },
      { x: `${2 * size}px`, y: 0, z: `${size}px` },
      { x: `${2 * size}px`, y: `${size}px`, z: `${size}px` },
      { x: `${2 * size}px`, y: `${2 * size}px`, z: `${size}px` },
      // Layer 3
      { x: 0, y: 0, z: `${2 * size}px` },
      { x: 0, y: `${size}px`, z: `${2 * size}px` },
      { x: 0, y: `${2 * size}px`, z: `${2 * size}px` },
      { x: `${size}px`, y: 0, z: `${2 * size}px` },
      { x: `${size}px`, y: `${size}px`, z: `${2 * size}px` },
      { x: `${size}px`, y: `${2 * size}px`, z: `${2 * size}px` },
      { x: `${2 * size}px`, y: 0, z: `${2 * size}px` },
      { x: `${2 * size}px`, y: `${size}px`, z: `${2 * size}px` },
      { x: `${2 * size}px`, y: `${2 * size}px`, z: `${2 * size}px` },
    ];
  });

  onDestroy(() => unsubscribe());
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
    {#each piecePositions as position}
      <Piece {position} />
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
</style>
