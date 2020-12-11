<script>
  import Size from "./settings/Size.svelte";
  import Rotation from "./settings/Rotation.svelte";
  import Cube from "./cube/Cube.svelte";
  import { pieces } from "./stores";
  import { L } from "./rotations/L";
  import { R } from "./rotations/R";
  import { U } from "./rotations/U";
  import { D } from "./rotations/D";

  const rotate = (rotation) => {
    pieces.update((pieces) => {
      return pieces.map((piece, i) => {
        return rotation(piece);
      });
    });
  };
</script>

<main>
  <div class="interactions">
    <button on:click={() => rotate(L)}>L</button>
    <button on:click={() => rotate(R)}>R</button>
    <button on:click={() => rotate(U)}>U</button>
    <button on:click={() => rotate(D)}>D</button>
  </div>
  <Cube />
  <div class="settings">
    <Size />
    <Rotation />
  </div>
</main>

<style>
  main {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
  .interactions {
    width: 300px;
    z-index: 999;
    position: absolute;
    top: 20px;
    display: flex;
    flex-flow: row;
  }
  .interactions > * {
    margin: 4px;
  }
  .settings {
    width: 300px;
    z-index: 999;
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-flow: column;
  }
</style>
