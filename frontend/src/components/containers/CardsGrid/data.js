
const trips = [
  {
    date: "2022-09-25",
    capacity: 4,
    price: 283.00,
    origin: "Buenos Aires",
    destination: "La Plata",
    image: ["https://images.unsplash.com/photo-1593014109521-48ea09f22592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.squarespace-cdn.com/content/v1/59ef2d3c9f8dce981401a30d/1592002341643-UCT10ZFLQ5GCJU8L1OVY/colorful+landscapes.jpg?format=1000w",
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"],
    driver: {
      name: "Mario",
      lastName: "Villar",
      rating: 4.7,
      image: "http://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
    },
  },
  {
    date: "2022-09-25",
    capacity: 3,
    price: 453.00,
    origin: "Bogotá",
    destination: "Barranquilla",
    image: ["https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1485834532228-4fcb1456f84f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"],
    driver: {
      name: "José",
      lastName: "Campos",
      rating: 2.7,
      image: "https://afceug.org/wp-content/uploads/2022/08/driver-1.jpg"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 150.00,
    origin: "Medellín",
    destination: "Santa María",
    image: ["https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1593014245500-cfe678e0f4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"],
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 3.1,
      image: "https://www.achauffeurs.com/assets/images/achauffeurs-banner2.jpg"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 283.00,
    origin: "Buenos Aires",
    destination: "La Plata",
    image: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.squarespace-cdn.com/content/v1/59ef2d3c9f8dce981401a30d/1592002341643-UCT10ZFLQ5GCJU8L1OVY/colorful+landscapes.jpg?format=1000w",
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"],
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 3.9,
      image: "https://www.geotab.com/CMS-Images-production/Blog/NA/2021/Feb/Truck-driver-retention/blog_driver_rentention_hero_@1x_DS02354.jpg"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 283.00,
    origin: "Manizales",
    destination: "Pereira",
    image: ["https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.squarespace-cdn.com/content/v1/59ef2d3c9f8dce981401a30d/1592002341643-UCT10ZFLQ5GCJU8L1OVY/colorful+landscapes.jpg?format=1000w",
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"],
    driver: {
      name: "Mario",
      lastName: "Villar",
      rating: 4.7,
      image: "http://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 283.00,
    origin: "Rosario",
    destination: "La Plata",
    image: ["https://images.unsplash.com/photo-1544954617-f5c6b0d16164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&w=1000&q=80",
    "https://images.squarespace-cdn.com/content/v1/59ef2d3c9f8dce981401a30d/1592002341643-UCT10ZFLQ5GCJU8L1OVY/colorful+landscapes.jpg?format=1000w",
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"],
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 2.7,
      image: "https://es.web.img3.acsta.net/c_310_420/pictures/16/05/17/17/01/069770.jpg"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 850.00,
    origin: "Buenos Aires",
    destination: "Bahía Blanca",
    image: ["https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.squarespace-cdn.com/content/v1/59ef2d3c9f8dce981401a30d/1592002341643-UCT10ZFLQ5GCJU8L1OVY/colorful+landscapes.jpg?format=1000w",
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"],
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 3.4,
      image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 83.00,
    origin: "San Luís",
    destination: "La Plata",
    image: ["https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
    "https://images.squarespace-cdn.com/content/v1/59ef2d3c9f8dce981401a30d/1592002341643-UCT10ZFLQ5GCJU8L1OVY/colorful+landscapes.jpg?format=1000w",
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"],
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 3.9,
      image: "http://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 105.00,
    origin: "Mendoza",
    destination: "La Plata",
    image: ["https://images.unsplash.com/photo-1494625927555-6ec4433b1571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
    "https://images.squarespace-cdn.com/content/v1/59ef2d3c9f8dce981401a30d/1592002341643-UCT10ZFLQ5GCJU8L1OVY/colorful+landscapes.jpg?format=1000w",
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"],
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 900.00,
    origin: "La Planicie",
    destination: "Resistencia",
    image: ["https://images.unsplash.com/photo-1499162526249-f5b8b9ba9923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.squarespace-cdn.com/content/v1/59ef2d3c9f8dce981401a30d/1592002341643-UCT10ZFLQ5GCJU8L1OVY/colorful+landscapes.jpg?format=1000w",
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"],
    driver: {
      name: "Miguel",
      lastName: "Rosario",
      rating: 2.7,
      image: "http://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 283.00,
    origin: "San Miguel",
    destination: "Enaco",
    image: ["https://images.unsplash.com/photo-1466971060667-16467c7d04ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80",
    "https://images.squarespace-cdn.com/content/v1/59ef2d3c9f8dce981401a30d/1592002341643-UCT10ZFLQ5GCJU8L1OVY/colorful+landscapes.jpg?format=1000w",
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"],
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 3.4,
      image: "https://www.quever.news/u/fotografias/m/2022/7/4/f638x638-32548_90715_4634.png"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 88.00,
    origin: "La Libertad",
    destination: "Piura",
    image: ["https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.squarespace-cdn.com/content/v1/59ef2d3c9f8dce981401a30d/1592002341643-UCT10ZFLQ5GCJU8L1OVY/colorful+landscapes.jpg?format=1000w",
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"],
    driver: {
      name: "Juan",
      lastName: "Villalobos",
      rating: 2.9,
      image: "http://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 153.00,
    origin: "Buenos Aires",
    destination: "La Plata",
    image: ["https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.squarespace-cdn.com/content/v1/59ef2d3c9f8dce981401a30d/1592002341643-UCT10ZFLQ5GCJU8L1OVY/colorful+landscapes.jpg?format=1000w",
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"],
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 3.9,
      image: "https://www.quever.news/u/fotografias/m/2022/7/4/f638x638-32548_90715_4634.png"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 501.00,
    origin: "Buenos Aires",
    destination: "La Plata",
    image: ["https://images.unsplash.com/photo-1417716146732-918825b83fa0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.squarespace-cdn.com/content/v1/59ef2d3c9f8dce981401a30d/1592002341643-UCT10ZFLQ5GCJU8L1OVY/colorful+landscapes.jpg?format=1000w",
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"],
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 3.9,
      image: "https://www.mandg.com/dam/investments/common-assets/shared/english/authors/images/mario-eisenegger.jpg/_jcr_content/renditions/cq5dam.web.3040.3040.jpeg"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 283.00,
    origin: "Rio Blanco",
    destination: "Rosario",
    image: ["https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80",
    "https://images.squarespace-cdn.com/content/v1/59ef2d3c9f8dce981401a30d/1592002341643-UCT10ZFLQ5GCJU8L1OVY/colorful+landscapes.jpg?format=1000w",
    "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"],
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 3.9,
      image: "http://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
    },
  },
];

export default trips;