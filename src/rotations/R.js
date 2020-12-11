export const R = (piece) => {
  const updated = { ...piece };

  if (piece.x !== "right") return piece;

  updated.rotateX += 90;

  if (piece.y === "top") {
    if (piece.z === "front") updated.y = "top";
    if (piece.z === "center") updated.y = "center";
    if (piece.z === "back") updated.y = "bottom";
    updated.z = "back";
  }
  if (piece.y === "bottom") {
    if (piece.z === "front") updated.y = "top";
    if (piece.z === "center") updated.y = "center";
    if (piece.z === "back") updated.y = "bottom";
    updated.z = "front";
  }
  if (piece.z === "front") {
    if (piece.y === "top") updated.z = "back";
    if (piece.y === "center") updated.z = "center";
    if (piece.y === "bottom") updated.z = "front";
    updated.y = "top";
  }
  if (piece.z === "back") {
    if (piece.y === "top") updated.z = "back";
    if (piece.y === "center") updated.z = "center";
    if (piece.y === "bottom") updated.z = "front";
    updated.y = "bottom";
  }
  return updated;
};
