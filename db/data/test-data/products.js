const products = [
    {
      id: 1,
      name: "Classic T-Shirt",
      price: 19.99,
      description: "A comfortable classic tee",
      category: "Apparel",
      variants: [
        { size: "S", color: "blue", stock: 10 },
        { size: "M", color: "blue", stock: 5 },
        { size: "L", color: "blue", stock: 0 }  // Sold out
      ],
      images: ["url_to_image1.jpg", "url_to_image2.jpg"]
    },
    {
      id: 2,
      name: "Running Shoes",
      price: 79.99,
      description: "Durable and stylish running shoes",
      category: "Footwear",
      variants: [
        { size: "8", color: "black", stock: 12 },
        { size: "9", color: "black", stock: 7 }
      ],
      images: ["url_to_image3.jpg", "url_to_image4.jpg"]
    },
    {
      id: 3,
      name: "Water Bottle",
      price: 9.99,
      description: "Reusable water bottle",
      category: "Accessories",
      stock: 25,
      images: ["url_to_image5.jpg"]
    }
  ];