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
    min="25"
    max="200" />
</div>

<style>
  .size {
    padding: 10px;
  }
</style>
