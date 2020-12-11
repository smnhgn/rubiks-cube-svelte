<script>
  import { settings } from "../stores.js";
  export let tile;
  export let piece;
</script>

<div
  class="tile {tile.slug}"
  style="
    background: {tile.color}; 
    border-radius: {$settings.size * 0.15}px;
    font-size: {$settings.size * 0.2}px;
    transform: 
      rotateX({tile.rotateX}deg) 
      rotateY({tile.rotateY}deg) 
      translateZ({$settings.size / 2}px);
  ">
  <!-- <div>x: {piece.x}</div>
  <div>y: {piece.y}</div>
  <div>z: {piece.z}</div> -->
</div>

<style>
  .tile {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0.1px solid black;
    box-shadow: 0 0 1px 0 white inset, 0 0 1px 0;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: black;
  }
</style>
