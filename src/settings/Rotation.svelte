<script>
  import { settings } from "../stores.js";
</script>

<div class="rotation">
  <label for="rotateX">Rotation X: {$settings.rotateX}deg</label>
  <input
    type="range"
    id="rotateX"
    name="rotateX"
    bind:value={$settings.rotateX}
    min="-180"
    max="180" />
</div>
<div class="rotation">
  <label for="rotation">Rotation Y: {$settings.rotateY}deg</label>
  <input
    type="range"
    id="rotateY"
    name="rotateY"
    bind:value={$settings.rotateY}
    min="-180"
    max="180" />
</div>

<style>
  .rotation {
    margin: 5px;
  }
  .rotation > input {
    width: 100%;
    margin: 0;
  }
</style>
