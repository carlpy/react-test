export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity: number;
};

export type DataForm = {
  quantity: string;
  product_id: string;
};

export type Products = {
  [key: string]: Product;
};

export enum calculatedProperties {
	Quantity = "quantity",
	Price = "price"
}