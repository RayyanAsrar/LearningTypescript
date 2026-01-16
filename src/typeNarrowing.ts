function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making${kind}Chai`;
  }
  return `Chai Order #${kind}`;
}
function serveChai(msg?: string) {
  if (msg) {
    console.log(`Serving Chai with message: ${msg}`);
  }
  return `Serving Default Masala Chai`;
}

function OrderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return "Ordered Small Chai";
  }
  if (size === "medium" || size === "large") {
    return `serving extra chai`;
  }
  return `order number ${size} is being prepared`;
}
