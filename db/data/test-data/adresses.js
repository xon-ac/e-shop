const addresses = [
    {
      id: 1,
      userId: 1,  // Belongs to user with ID 1 (John Doe)
      addressLine1: "123 Main St",
      addressLine2: "Apt 4B",
      city: "Anytown",
      state: "NY",
      postalCode: "12345",
      country: "USA",
      isDefault: true
    },
    {
      id: 2,
      userId: 1,  // Another address for user with ID 1 (John Doe)
      addressLine1: "456 Oak St",
      addressLine2: "",
      city: "Othertown",
      state: "CA",
      postalCode: "67890",
      country: "USA",
      isDefault: false
    },
    {
      id: 3,
      userId: 2,  // Belongs to user with ID 2 (Jane Smith)
      addressLine1: "789 Pine St",
      addressLine2: "",
      city: "Sometown",
      state: "TX",
      postalCode: "54321",
      country: "USA",
      isDefault: true
    }
  ];
  
  module.exports = addresses;