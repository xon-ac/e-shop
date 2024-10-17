const orders = [
    {
      id: 101,
      userId: 1,  // Order placed by user with ID 1 (John Doe)
      products: [
        { productId: 1, quantity: 2 }, // 2 units of product 1
        { productId: 2, quantity: 1 }  // 1 unit of product 2
      ],
      totalPrice: 119.97,
      status: "shipped",
      deliveryOption: "standard",
      orderDate: "2024-10-12"
    },
    {
      id: 102,
      userId: 2,  // Order placed by user with ID 2 (Jane Smith)
      products: [
        { productId: 3, quantity: 1 } // 1 unit of product 3
      ],
      totalPrice: 9.99,
      status: "pending",
      deliveryOption: "express",
      orderDate: "2024-10-13"
    }
  ];
  
  module.exports = orders;