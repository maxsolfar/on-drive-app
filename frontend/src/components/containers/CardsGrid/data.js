
const trips = [
  {
    date: "2022-06-18",
    capacity: 4,
    price: 283.00,
    origin: "Buenos Aires",
    destination: "La Plata",
    image: "https://fotoarte.com.uy/wp-content/uploads/2019/03/Landscape-fotoarte.jpg",
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 4.7,
      image: "http://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 283.00,
    origin: "Buenos Aires",
    destination: "La Plata",
    image: "https://images.squarespace-cdn.com/content/v1/59ef2d3c9f8dce981401a30d/1592002341643-UCT10ZFLQ5GCJU8L1OVY/colorful+landscapes.jpg?format=1000w",
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 2.7,
      image: "http://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 283.00,
    origin: "Buenos Aires",
    destination: "La Plata",
    image: "https://images.unsplash.com/photo-1544954617-f5c6b0d16164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&w=1000&q=80",
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 3.0,
      image: "http://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 283.00,
    origin: "Buenos Aires",
    destination: "La Plata",
    image: "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
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
    price: 283.00,
    origin: "Buenos Aires",
    destination: "La Plata",
    image: "https://fotoarte.com.uy/wp-content/uploads/2019/03/Landscape-fotoarte.jpg",
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 4.7,
      image: "http://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 283.00,
    origin: "Buenos Aires",
    destination: "La Plata",
    image: "https://images.squarespace-cdn.com/content/v1/59ef2d3c9f8dce981401a30d/1592002341643-UCT10ZFLQ5GCJU8L1OVY/colorful+landscapes.jpg?format=1000w",
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 2.7,
      image: "http://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 283.00,
    origin: "Buenos Aires",
    destination: "La Plata",
    image: "https://images.unsplash.com/photo-1544954617-f5c6b0d16164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&w=1000&q=80",
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 3.0,
      image: "http://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 283.00,
    origin: "Buenos Aires",
    destination: "La Plata",
    image: "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
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
    price: 283.00,
    origin: "Buenos Aires",
    destination: "La Plata",
    image: "https://fotoarte.com.uy/wp-content/uploads/2019/03/Landscape-fotoarte.jpg",
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 4.7,
      image: "http://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 283.00,
    origin: "Buenos Aires",
    destination: "La Plata",
    image: "https://images.squarespace-cdn.com/content/v1/59ef2d3c9f8dce981401a30d/1592002341643-UCT10ZFLQ5GCJU8L1OVY/colorful+landscapes.jpg?format=1000w",
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 2.7,
      image: "http://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 283.00,
    origin: "Buenos Aires",
    destination: "La Plata",
    image: "https://images.unsplash.com/photo-1544954617-f5c6b0d16164?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&w=1000&q=80",
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 3.0,
      image: "http://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
    },
  },
  {
    date: "2022-06-18",
    capacity: 4,
    price: 283.00,
    origin: "Buenos Aires",
    destination: "La Plata",
    image: "https://images.unsplash.com/photo-1503424886307-b090341d25d1?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    driver: {
      name: "Manuel",
      lastName: "Campos",
      rating: 3.9,
      image: "http://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
    },
  },
];

export default trips;