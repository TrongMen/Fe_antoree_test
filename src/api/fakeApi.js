const products = [
  {
    id: 1,
    name: "Học tiếng anh giao tiếp",
    price: 700000,
    image: "/react.png",
    shortDesc: "Khóa học tiếng anh giao tiếp cơ bản",
    longDesc: "Khóa học toàn diện về React, JSX, hooks...",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Khóa học Python cơ bản",
    price: 800000,
    image: "/react.png",
    shortDesc: "Học Python từ cơ bản đến nâng cao",
    longDesc: "Khóa học toàn diện về Python, từ cơ bản đến nâng cao",
    rating: 4.8,
  },{
    id: 3,
    name: "Khóa học Java cơ bản",
    price: 1100000,
    image: "/react.png",
    shortDesc: "Học Java từ cơ bản đến nâng cao",
    longDesc: " Khóa học toàn diện về Java, từ cơ bản đến nâng cao",
    rating: 4.8,
  },{
    id: 4,
    name: "Lập trình web với JavaScript",
    price: 600000,
    image: "/react.png",
    shortDesc: "Học lập trình web với JavaScript",
    longDesc: "Khóa học toàn diện về React, JSX, hooks...",
    rating: 4.8,
  },{
    id: 5,
    name: "Hướng đối tượng trong JavaScript",
    price: 700000,
    image: "/react.png",
    shortDesc: "Học hướng đối tượng trong JavaScript",
    longDesc: "Khóa học toàn diện về React, JSX, hooks...",
    rating: 4.8,
  },{
    id: 6,
    name: "C/C++ cơ bản",
    price: 500000,
    image: "/react.png",
    shortDesc: "Học C/C++ từ cơ bản đến nâng cao",
    longDesc: "Khóa học toàn diện về C/C++, từ cơ bản đến nâng cao",
    rating: 4.8,
  },
];

export const getAllProducts = () => Promise.resolve(products);

export const getSuggestions = (userId) =>
  Promise.resolve(products.slice(0, 2));
