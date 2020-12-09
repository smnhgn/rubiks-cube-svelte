<script>
  import Piece from "./Piece.svelte";
  import { settings, piecePositions, pieceRotations } from "../stores.js";

  const rotate = () => {
    pieceRotations.update((rotations) => {
      console.log(rotations);
      return rotations.map((rot, i) => {
        console.log({ rot });
        if (i < 9) {
          rot.rotateZ += 90;
        }
        return rot;
      });
    });
  };
</script>

<button class="rotate-button" on:click={rotate}>Rotate</button>
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
    {#each $piecePositions as position, i}
      <div
        class="piece-container"
        style="
          transform: 
            rotateX({$pieceRotations[i]?.rotateX}deg) 
            rotateY({$pieceRotations[i]?.rotateY}deg)
            rotateZ({$pieceRotations[i]?.rotateZ}deg);
          transform-origin: 50% 50% {$settings.size}px;
        ">
        <Piece {position} />
      </div>
    {/each}
  </div>
</div>

<style>
  .rotate-button {
    position: absolute;
    top: 0;
  }
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
