export const site = {
  name: "Verde",
  tagline: "Farm to Table",
  phone: "+91 98765 43210",
  email: "hello@verde.restaurant",
  address: "42 MG Road, Indiranagar, Bengaluru, Karnataka 560038",
  hours: [
    { day: "Monday – Thursday", time: "5:00 PM – 10:00 PM" },
    { day: "Friday – Saturday", time: "12:00 PM – 11:00 PM" },
    { day: "Sunday", time: "12:00 PM – 9:00 PM" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Reserve", href: "#reserve" },
];

export const menu = [
  {
    id: "starters",
    label: "Starters",
    items: [
      {
        name: "Heirloom Tomato Salad",
        description:
          "Garden tomatoes, burrata, basil oil, aged balsamic, toasted sourdough.",
        price: "₹450",
        tag: "Vegetarian",
        image:
          "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Charred Green Asparagus",
        description:
          "Grilled asparagus, poached egg, hazelnut gremolata, pecorino.",
        price: "₹520",
        image:
          "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Wild Mushroom Toast",
        description:
          "Sourdough, foraged mushrooms, thyme cream, shaved parmesan.",
        price: "₹480",
        tag: "Chef's Pick",
        image:
          "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    items: [
      {
        name: "Herb-Crusted Salmon",
        description:
          "Line-caught salmon, spring peas, dill beurre blanc, new potatoes.",
        price: "₹850",
        image:
          "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Garden Risotto",
        description:
          "Carnaroli rice, seasonal greens, lemon, aged parmesan, olive oil.",
        price: "₹720",
        tag: "Vegetarian",
        image:
          "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Grass-Fed Ribeye",
        description:
          "12oz dry-aged ribeye, charred greens, roasted shallot jus.",
        price: "₹1,200",
        tag: "Chef's Pick",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      {
        name: "Lemon Olive Oil Cake",
        description: "Citrus sponge, crème fraîche, candied lemon, thyme honey.",
        price: "₹350",
        image:
          "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Dark Chocolate Tart",
        description: "70% chocolate ganache, sea salt, hazelnut praline.",
        price: "₹380",
        tag: "Vegan",
        image:
          "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Seasonal Fruit Pavlova",
        description: "Crisp meringue, whipped vanilla cream, market berries.",
        price: "₹350",
        image:
          "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
];

export const highlights = [
  {
    title: "Locally Sourced",
    description:
      "We partner with nearby farms to bring the freshest seasonal produce to your plate.",
  },
  {
    title: "Made From Scratch",
    description:
      "Every sauce, stock, and loaf of bread is prepared in-house, every single day.",
  },
  {
    title: "Thoughtfully Served",
    description:
      "A warm, unhurried dining experience designed around great food and company.",
  },
];
