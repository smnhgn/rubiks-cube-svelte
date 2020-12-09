<script>
  import { settings } from "../stores.js";
</script>

<div class="size">
  <label for="size">Size: {$settings.size}px</label>
  <input
    type="range"
    id="size"
    name="size"
    bind:value={$settings.size}
    min="30"
    max="70" />
</div>

<style>
  .size {
    margin: 5px;
  }
  .size > input {
    width: 100%;
    margin: 0;
  }
</style>
