<script>
  import { settings } from "../stores.js";
  export let config = {
    color: "#C41E3A",
    slug: "front",
    rotateX: "0deg",
    rotateY: "0deg",
  };
</script>

<div
  class="tile {config.slug}"
  style="
    background: {config.color}; 
    width: {$settings.size}px; 
    height: {$settings.size}px;
    transform: rotateX({config.rotateX}deg) rotateY({config.rotateY}deg) translateZ({$settings.size / 2}px);
  " />

<style>
  .tile {
    position: absolute;
  }
</style>
