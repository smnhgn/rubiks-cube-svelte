<script>
  import { settings } from "../stores.js";
  export let config = {
    color: "#C41E3A",
    slug: "front",
    rotateX: "0deg",
    rotateY: "0deg",
  };
  export let id = 0;
</script>

<div
  class="tile {config.slug}"
  style="
    background: {config.color}; 
    border-radius: {$settings.size * 0.15}px;
    transform: 
      rotateX({config.rotateX}deg) 
      rotateY({config.rotateY}deg) 
      translateZ({$settings.size / 2}px);
  ">
  {id}
</div>

<style>
  .tile {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0.1px solid black;
    box-shadow: 0 0 1px 0 white inset, 0 0 1px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    color: darkturquoise;
  }
</style>
