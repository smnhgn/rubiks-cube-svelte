export const U = (piece) => {
  const updated = { ...piece };

  if (piece.y !== "top") return piece;

  updated.rotateY -= 90;

  if (piece.x === "left") {
    if (piece.z === "front") updated.x = "left";
    if (piece.z === "center") updated.x = "center";
    if (piece.z === "back") updated.x = "right";
    updated.z = "back";
  }
  if (piece.x === "right") {
    if (piece.z === "front") updated.x = "right";
    if (piece.z === "center") updated.x = "center";
    if (piece.z === "back") updated.x = "right";
    updated.z = "front";
  }
  if (piece.z === "front") {
    if (piece.x === "left") updated.z = "back";
    if (piece.x === "center") updated.z = "center";
    if (piece.x === "right") updated.z = "front";
    updated.x = "left";
  }
  if (piece.z === "back") {
    if (piece.x === "right") updated.z = "front";
    if (piece.x === "center") updated.z = "center";
    if (piece.x === "left") updated.z = "back";
    updated.x = "right";
  }
  return updated;
};
