<script>
  import Piece from "./Piece.svelte";
  import { settings } from "../stores.js";
</script>

<div
  class="cube"
  style="
    width: {$settings.size}px; 
    height: {$settings.size}px;
  ">
  <Piece />
</div>

<style>
  .cube {
    width: 50px;
    height: 50px;
    perspective: 300px;
  }
</style>
