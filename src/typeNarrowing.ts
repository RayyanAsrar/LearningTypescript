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

type ChaiOrder = {
  type: string;
  sugar: number;
};

// Type guard: if this returns true, TypeScript knows obj is ChaiOrder
function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item:ChaiOrder|string) {
  if(isChaiOrder(item)){
    return `Serving ${item.type} chai with ${item.sugar} spoons of sugar`;
  }
}
type MaslaChai = {
  type: "masala";
  spiceLevel: number;
};
type GingerChai = {
  type: "ginger";
  amount: number;
};
type Elaichi = {
  type: "elaichi";
  aroma: number;
};
type Chai= MaslaChai | GingerChai | Elaichi;
function prepareChai(order: Chai) {
  switch(order.type){
    case "masala":
      return `Preparing masala chai with spice level ${order.spiceLevel}`;
    case "ginger":
      return `Preparing ginger chai with amount ${order.amount}`;
    case "elaichi":
      return `Preparing elaichi chai with aroma ${order.aroma}`;
  }