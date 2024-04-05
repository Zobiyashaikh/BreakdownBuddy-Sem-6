// features/cart/productState.js
import { atom } from "recoil";

export const productListState = atom({
  key: 'productList',
  default: [
    // { id: 1, price: 1000, title: 'Basic Car Servicing' },
    // { id: 2, price: 500, title: 'Basic Car Wash' },
    // { id: 3, price: 1500, title: 'Wheel Alignment' },
  ],
});