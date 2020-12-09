<script>
  import { onDestroy } from "svelte";
  import Piece from "./Piece.svelte";
  import { settings } from "../stores.js";

  let piecePositions;

  const unsubscribe = settings.subscribe(({ size }) => {
    piecePositions = [
      { top: 0, left: 0 },
      { top: 0, left: $settings.size + "px" },
      { top: 0, right: 0 },
      { top: $settings.size + "px", left: 0 },
      { top: $settings.size + "px", left: $settings.size + "px" },
      { top: $settings.size + "px", right: 0 },
      { bottom: 0, left: 0 },
      { bottom: 0, left: $settings.size + "px" },
      { bottom: 0, right: 0 },
    ];
  });

  onDestroy(() => unsubscribe());
</script>

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

<style>
  .cube {
    perspective: 500;
    transform-style: preserve-3d;
  }
</style>
