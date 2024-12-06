const orders = [
    {
      id: 101,
      userId: 1,
      products: [
        { productId: 1, quantity: 2 },
        { productId: 2, quantity: 1 } 
      ],
      totalPrice: 119.97,
      status: "shipped",
      deliveryOption: "standard",
      orderDate: "2024-10-12"
    },
    {
      id: 102,
      userId: 2,
      products: [
        { productId: 3, quantity: 1 }
      ],
      totalPrice: 9.99,
      status: "pending",
      deliveryOption: "express",
      orderDate: "2024-10-13"
    }
  ];
  
  module.exports = orders;