const addresses = [
    {
      id: 1,
      userId: 1,
      addressLine1: "12 Baker Street",
      addressLine2: "Flat 2A",
      city: "London",
      postalCode: "NW1 6XE",
      country: "UK",
      isDefault: true
    },
    {
      id: 2,
      userId: 1,
      addressLine1: "34 High Street",
      addressLine2: "",
      city: "Manchester",
      postalCode: "M4 1HQ",
      country: "UK",
      isDefault: false
    },
    {
      id: 3,
      userId: 2, 
      addressLine1: "56 Royal Crescent",
      addressLine2: "",
      city: "Bath",
      postalCode: "BA1 2LT",
      country: "UK",
      isDefault: true
    }
  ];
  
  module.exports = addresses;