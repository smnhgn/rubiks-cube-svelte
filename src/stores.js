import { readable, writable, derived } from "svelte/store";

export const settings = writable({
  size: 50,
  rotateX: -20,
  rotateY: -40,
});

export const tileConfigs = readable([
  { color: "#C41E3A", slug: "front", rotateX: 0, rotateY: 0 },
  { color: "#FF5800", slug: "right", rotateX: 0, rotateY: 90 },
  { color: "#0051BA", slug: "back", rotateX: 0, rotateY: 180 },
  { color: "#DDDDDD", slug: "left", rotateX: 0, rotateY: -90 },
  { color: "#009E60", slug: "top", rotateX: 90, rotateY: 0 },
  { color: "#FFD500", slug: "bottom", rotateX: -90, rotateY: 0 },
]);

export const pieceRotations = writable([
  { id: 1, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 2, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 3, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 4, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 5, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 6, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 7, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 8, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 9, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 10, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 11, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 12, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 13, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 14, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 15, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 16, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 17, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 18, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 19, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 20, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 21, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 22, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 23, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 24, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 25, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 26, rotateX: 0, rotateY: 0, rotateZ: 0 },
  { id: 27, rotateX: 0, rotateY: 0, rotateZ: 0 },
]);

export const piecePositions = derived(settings, ({ size }) => {
  return [
    { id: 1, x: 0, y: 0, z: 0 },
    { id: 2, x: 0, y: `${size}px`, z: 0 },
    { id: 3, x: 0, y: `${2 * size}px`, z: 0 },
    { id: 4, x: `${size}px`, y: 0, z: 0 },
    { id: 5, x: `${size}px`, y: `${size}px`, z: 0 },
    { id: 6, x: `${size}px`, y: `${2 * size}px`, z: 0 },
    { id: 7, x: `${2 * size}px`, y: 0, z: 0 },
    { id: 8, x: `${2 * size}px`, y: `${size}px`, z: 0 },
    { id: 9, x: `${2 * size}px`, y: `${2 * size}px`, z: 0 },
    { id: 10, x: 0, y: 0, z: `${size}px` },
    { id: 11, x: 0, y: `${size}px`, z: `${size}px` },
    { id: 12, x: 0, y: `${2 * size}px`, z: `${size}px` },
    { id: 13, x: `${size}px`, y: 0, z: `${size}px` },
    { id: 14, x: `${size}px`, y: `${size}px`, z: `${size}px` },
    { id: 15, x: `${size}px`, y: `${2 * size}px`, z: `${size}px` },
    { id: 16, x: `${2 * size}px`, y: 0, z: `${size}px` },
    { id: 17, x: `${2 * size}px`, y: `${size}px`, z: `${size}px` },
    { id: 18, x: `${2 * size}px`, y: `${2 * size}px`, z: `${size}px` },
    { id: 19, x: 0, y: 0, z: `${2 * size}px` },
    { id: 20, x: 0, y: `${size}px`, z: `${2 * size}px` },
    { id: 21, x: 0, y: `${2 * size}px`, z: `${2 * size}px` },
    { id: 22, x: `${size}px`, y: 0, z: `${2 * size}px` },
    { id: 23, x: `${size}px`, y: `${size}px`, z: `${2 * size}px` },
    { id: 24, x: `${size}px`, y: `${2 * size}px`, z: `${2 * size}px` },
    { id: 25, x: `${2 * size}px`, y: 0, z: `${2 * size}px` },
    { id: 26, x: `${2 * size}px`, y: `${size}px`, z: `${2 * size}px` },
    { id: 27, x: `${2 * size}px`, y: `${2 * size}px`, z: `${2 * size}px` },
  ];
});
