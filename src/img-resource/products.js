import basicTeesBlack from "./basic-tees-black.jpeg";
import basicTeesBrown from "./basic-tees-brown.jpeg";
import basicTeesNavy from "./basic-tees-navy.jpeg";
import bristolJacketGray from "./bristol-coach-jacket-gray.jpeg";
import bristolJacketNavy from "./bristol-coach-jacket-navy.jpeg";
import workShirtBlue from "./linen-work-shirt-blue.jpeg";
import workShirtGray from "./linen-work-shirt-gray.jpeg";
import chinosBrown from "./patron-chinos-brown.jpeg";
import chinosKhaki from "./patron-chinos-khaki.jpeg";
import poloBlack from "./polo-hove-black.jpeg";
import poloGray from "./polo-hove-gray.jpeg";
import poloNavy from "./polo-hove-navy.jpeg";
import poloWhite from "./polo-hove-white.jpeg";
import pantsBlack from "./preppy-pants-black.jpeg";
import pantsGray from "./preppy-pants-gray.jpeg";
import stamfordBlue from "./stamford-jacket-blue.jpeg";
import stamfordBrown from "./stamford-jacket-brown.jpeg";

const products = [
  {
    id: "tee-01",
    title: "Basic Tees Black",
    img: basicTeesBlack,
    price: 119000,
    category: 100,
    availability: [
      { size: "XS", qty: 50 },
      { size: "S", qty: 60 },
      { size: "M", qty: 100 },
      { size: "L", qty: 50 },
      { size: "XL", qty: 10 },
    ],
  },
  {
    id: "tee-02",
    title: "Basic Tees Brown",
    img: basicTeesBrown,
    price: 119000,
    category: 100,
    availability: [
      { size: "XS", qty: 50 },
      { size: "S", qty: 60 },
      { size: "M", qty: 100 },
      { size: "L", qty: 50 },
      { size: "XL", qty: 10 },
    ],
  },
  {
    id: "tee-03",
    title: "Basic Tees Navy",
    img: basicTeesNavy,
    price: 119000,
    category: 100,
    availability: [
      { size: "XS", qty: 50 },
      { size: "S", qty: 60 },
      { size: "M", qty: 100 },
      { size: "L", qty: 50 },
      { size: "XL", qty: 10 },
    ],
  },
  {
    id: "bristol-01",
    title: "Bristol Jacket Gray",
    img: bristolJacketGray,
    price: 219000,
    category: 200,
    availability: [
      { size: "XS", qty: 50 },
      { size: "S", qty: 60 },
      { size: "M", qty: 100 },
      { size: "L", qty: 50 },
      { size: "XL", qty: 10 },
    ],
  },
  {
    id: "bristol-02",
    title: "Bristol Jacket Navy",
    img: bristolJacketNavy,
    price: 219000,
    category: 200,
    availability: [
      { size: "XS", qty: 50 },
      { size: "S", qty: 60 },
      { size: "M", qty: 100 },
      { size: "L", qty: 50 },
      { size: "XL", qty: 10 },
    ],
  },
  {
    id: "work-01",
    title: "Work Shirt Navy",
    img: workShirtBlue,
    price: 189000,
    category: 300,
    availability: [
      { size: "XS", qty: 50 },
      { size: "S", qty: 60 },
      { size: "M", qty: 100 },
      { size: "L", qty: 50 },
      { size: "XL", qty: 10 },
    ],
  },
  {
    id: "work-02",
    title: "Work Shirt Gray",
    img: workShirtGray,
    price: 189000,
    category: 300,
    availability: [
      { size: "XS", qty: 50 },
      { size: "S", qty: 60 },
      { size: "M", qty: 100 },
      { size: "L", qty: 50 },
      { size: "XL", qty: 10 },
    ],
  },
  {
    id: "chinos-01",
    title: "Chinos Pants Brown",
    img: chinosBrown,
    price: 249000,
    category: 400,
    availability: [
      { size: "XS", qty: 50 },
      { size: "S", qty: 60 },
      { size: "M", qty: 100 },
      { size: "L", qty: 50 },
      { size: "XL", qty: 10 },
    ],
  },
  {
    id: "chinos-02",
    title: "Chinos Pants Khaki",
    img: chinosKhaki,
    price: 249000,
    category: 400,
    availability: [
      { size: "XS", qty: 50 },
      { size: "S", qty: 60 },
      { size: "M", qty: 100 },
      { size: "L", qty: 50 },
      { size: "XL", qty: 10 },
    ],
  },
  {
    id: "polo-01",
    title: "Polo T-Shirt Black",
    img: poloBlack,
    price: 199000,
    category: 500,
    availability: [
      { size: "XS", qty: 50 },
      { size: "S", qty: 60 },
      { size: "M", qty: 100 },
      { size: "L", qty: 50 },
      { size: "XL", qty: 10 },
    ],
  },
  {
    id: "polo-02",
    title: "Polo T-Shirt Gray",
    img: poloGray,
    price: 199000,
    category: 500,
    availability: [
      { size: "XS", qty: 50 },
      { size: "S", qty: 60 },
      { size: "M", qty: 100 },
      { size: "L", qty: 50 },
      { size: "XL", qty: 10 },
    ],
  },
  {
    id: "polo-03",
    title: "Polo T-Shirt Navy",
    img: poloNavy,
    price: 199000,
    category: 500,
    availability: [
      { size: "XS", qty: 50 },
      { size: "S", qty: 60 },
      { size: "M", qty: 100 },
      { size: "L", qty: 50 },
      { size: "XL", qty: 10 },
    ],
  },
  {
    id: "polo-04",
    title: "Polo T-Shirt White",
    img: poloWhite,
    price: 199000,
    category: 500,
    availability: [
      { size: "XS", qty: 50 },
      { size: "S", qty: 60 },
      { size: "M", qty: 100 },
      { size: "L", qty: 50 },
      { size: "XL", qty: 10 },
    ],
  },
  {
    id: "preppy-01",
    title: "Preppy Pants Black",
    img: pantsBlack,
    price: 249000,
    category: 400,
    availability: [
      { size: "XS", qty: 50 },
      { size: "S", qty: 60 },
      { size: "M", qty: 100 },
      { size: "L", qty: 50 },
      { size: "XL", qty: 10 },
    ],
  },
  {
    id: "preppy-02",
    title: "Preppy Pants Gray",
    img: pantsGray,
    price: 249000,
    category: 400,
    availability: [
      { size: "XS", qty: 50 },
      { size: "S", qty: 60 },
      { size: "M", qty: 100 },
      { size: "L", qty: 50 },
      { size: "XL", qty: 10 },
    ],
  },
  {
    id: "stamford-01",
    title: "Stamford Jacket Navy",
    img: stamfordBlue,
    price: 225000,
    category: 200,
    availability: [
      { size: "XS", qty: 50 },
      { size: "S", qty: 60 },
      { size: "M", qty: 100 },
      { size: "L", qty: 50 },
      { size: "XL", qty: 10 },
    ],
  },
  {
    id: "stamford-02",
    title: "Stamford Jacket Brown",
    img: stamfordBrown,
    price: 225000,
    category: 200,
    availability: [
      { size: "XS", qty: 50 },
      { size: "S", qty: 60 },
      { size: "M", qty: 100 },
      { size: "L", qty: 50 },
      { size: "XL", qty: 10 },
    ],
  },
];

export default products;
