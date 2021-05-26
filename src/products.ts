export interface Product {
  id: string;
  name: string;
  component: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Product name One",
    component: "ProductComponent",
  },
  {
    id: "2",
    name: "Product name Two",
    component: "ProductComponent",
  },
];

export default products;
