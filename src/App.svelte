<script>
  import Size from "./settings/Size.svelte";
  import Rotation from "./settings/Rotation.svelte";
  import Cube from "./cube/Cube.svelte";
</script>

<main>
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
  .settings {
    width: 300px;
    z-index: 999;
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-flow: column;
  }
</style>
