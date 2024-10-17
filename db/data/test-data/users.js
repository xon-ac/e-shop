const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      password: "hashedpassword123",  // Placeholder, would normally be hashed
      billingInfo: {
        address: "12 Main Road, Manchester, M1 2AB",
        paymentMethod: "Visa",
        lastFourDigits: "1234"
      },
      wishlist: [2], // Wishlist containing product ID 2
      previousOrders: [101, 102]
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      password: "hashedpassword456",
      billingInfo: {
        address: "1 High St, Manchester, M2 3BA",
        paymentMethod: "MasterCard",
        lastFourDigits: "5678"
      },
      wishlist: [1, 3], // Wishlist containing product IDs 1 and 3
      previousOrders: [103]
    }
  ];
  
  module.exports = users;