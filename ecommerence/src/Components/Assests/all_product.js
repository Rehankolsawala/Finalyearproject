import p1_img from "./Affogato.jpg";
import p2_img from "./Americano.jpg";
import p3_img from "./Cappuccino.jpg";
import p4_img from "./Doppio.jpg";
import p5_img from "./Espresso.jpg";
import p6_img from "./Flat_White.jpg";
import p7_img from "./French_Press.jpg";
import p8_img from "./Irish_Coffee.jpg";
import p9_img from "./Latte.jpg";
import p10_img from "./Macchiato.jpg";
import p11_img from "./Mocha.jpg";
import p12_img from "./Turkish_Coffee.jpg";
import p13_img from "./Bruschetta_S1.jpg";
import p14_img from "./Caprese_Salad_S2.jpg";
import p15_img from "./Nachos_S3.jpg";
import p16_img from "./Hummus_Platter_S4.jpg";
import p17_img from "./Chicken_Wings_S5.jpg";
import p18_img from "./Vegetable_Spring_Rolls_S6.jpg";
import p19_img from "./Potato_Skins_S7.jpg";
import p20_img from "./Mozzarella_Sticks_S8.jpg";
import p21_img from "./Quesadillas_S9.jpg";
import p22_img from "./Falafel_S10.jpg";
import p23_img from "./Garlic_Bread_S11.jpg";
import p24_img from "./Mini_Sliders.jpg";
import p25_img from "./Tiramisu_D1.jpg";
import p26_img from "./Cheesecake_D2.jpg";
import p27_img from "./Chocolate_Lava_Cake_D3.jpg";
import p28_img from "./Creme_Brulee_D4.jpg";
import p29_img from "./Apple_Pie_D5.jpg";
import p30_img from "./Panna_Cotta_D6.jpg";
import p31_img from "./Fruit_Tart_D7.jpg";
import p32_img from "./Brownie_Sundae_D8.jpg";
import p33_img from "./Banoffee_Pie_D9.jpg";
import p34_img from "./Strawberry_Shortcake_D10.jpg";
import p35_img from "./Key_Lime_Pie_D11.jpg";
import p36_img from "./Chocolate_Mousse_D12.jpg";

let all_product = [
  {
    id: 1,
    name: "Affogato",
    category: "Coffee",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Americano",
    category: "Coffee",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Cappuccino",
    category: "Coffee",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Doppio",
    category: "Coffee",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Espresso",
    category: "Coffee",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "Flat White",
    category: "Coffee",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "French Press",
    category: "Coffee",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "Irish Coffee",
    category: "Coffee",
    image: p8_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 9,
    name: "Latte",
    category: "Coffee",
    image: p9_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Macchiato",
    category: "Coffee",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Mocha",
    category: "Coffee",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "Turkish Coffee",
    category: "Coffee",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 13,
    name: "Bruschetta",
    category: "Snacks",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Caprese Salad",
    category: "Snacks",
    image: p14_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Nachos",
    category: "Snacks",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Hummus Platter",
    category: "Snacks",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Chicken Wings",
    category: "Snacks",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Vegetable Spring Rolls",
    category: "Snacks",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "Potato Skins",
    category: "Snacks",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "Mozzarella Sticks",
    category: "Snacks",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "Quesadillas",
    category: "Snacks",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "Falafel",
    category: "Snacks",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "Garlic Bread",
    category: "Snacks",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "Mini Sliders",
    category: "Snacks",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "Tiramisu",
    category: "Dessert",
    image: p25_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 26,
    name: "Cheesecake",
    category: "Dessert",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 27,
    name: "Chocolate Lava Cake",
    category: "Dessert",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 28,
    name: "Creme Brulee",
    category: "Dessert",
    image: p28_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 29,
    name: "Apple Pie",
    category: "Dessert",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 30,
    name: "Panna Cotta",
    category: "Dessert",
    image: p30_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 31,
    name: "Fruit Tart",
    category: "Dessert",
    image: p31_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 32,
    name: "Brownie Sundae",
    category: "Dessert",
    image: p32_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 33,
    name: "Banoffee Pie",
    category: "Dessert",
    image: p33_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 34,
    name: "Strawberry Shortcake",
    category: "Dessert",
    image: p34_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 35,
    name: "Key Lime Pie",
    category: "Dessert",
    image: p35_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 36,
    name: "Chocolate Mousse",
    category: "Dessert",
    image: p36_img,
    new_price: 85.0,
    old_price: 120.5,
  },
];

export default all_product;
