import { Dispatch, SetStateAction, useState } from "react";
import { DataForm, Product, Products } from "../types/Products";

type Data<T> = T | null;

interface formProps {
  setFormValue: Dispatch<SetStateAction<Products>>;
  products: Data<Product[]>; // these are given by the user so it's an array of the data
}

export default function FormItem({ setFormValue, products }: formProps) {
  const [formInfo, setFormInfo] = useState<DataForm>({
    quantity: "",
    product_id: "",
  });

  function handleChanges(e: React.ChangeEvent<HTMLInputElement>) {
    setFormInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function addItemsToBasket(e: React.FormEvent) {
    e.preventDefault();
    if (!products) {
      throw new Error("There's no products");
    }

    const productId = formInfo.product_id;
    const productItem = products[parseInt(productId) - 1];
    productItem.quantity = parseInt(formInfo.quantity);

    setFormValue((prev) => ({
      ...prev,
      [productId]: productItem,
    }));
    setFormInfo({ product_id: "", quantity: "" });
  }

  return (
    <form className="flex justify-between" onSubmit={addItemsToBasket}>
      <div className="my-2">
        <input
          name="quantity"
          type="number"
          id="quantity"
          placeholder="Quantity"
          className="border px-2 py-1 text-sm"
          onChange={handleChanges}
          value={formInfo.quantity}
        />
      </div>
      <div className="my-2">
        <input
          name="product_id"
          type="number"
          id="id_product"
          placeholder="Product id"
          className="border px-2 py-1 text-sm"
          onChange={handleChanges}
          value={formInfo.product_id}
        />
      </div>

      <button className="border bg-blue-600 text-white px-4 py-1 rounded" type="submit">
        Add product
      </button>
    </form>
  );
}
