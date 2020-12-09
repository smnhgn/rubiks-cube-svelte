<script>
  import { settings } from "../stores.js";
</script>

<div class="rotation">
  <label for="rotation">Rotation X: {$settings.rotateX}deg</label>
  <input
    type="range"
    id="size"
    name="size"
    bind:value={$settings.rotateX}
    min="-180"
    max="180" />
</div>
<div class="rotation">
  <label for="rotation">Rotation Y: {$settings.rotateY}deg</label>
  <input
    type="range"
    id="size"
    name="size"
    bind:value={$settings.rotateY}
    min="-180"
    max="180" />
</div>

<style>
  .rotation {
    padding: 10px;
  }
</style>
