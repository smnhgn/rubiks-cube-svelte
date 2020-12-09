import { readable, writable } from "svelte/store";

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
