interface Product {
  id: string;
  name: string;
  price: number;
}

interface Order {
  orderId: string;
  customerName: string;
  products: Product[];
}

function calculateOrderTotal(order: Order): number {
  return order.products.reduce((sum, p) => sum + p.price, 0);
}

const order1: Order = {
  orderId: "ORD001",
  customerName: "Bob",
  products: [
    { id: "P1", name: "Laptop", price: 1000 },
    { id: "P2", name: "Mouse", price: 50 }
  ]
};

console.log("Order Total:", calculateOrderTotal(order1));

