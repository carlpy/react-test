import { Dispatch, SetStateAction, useState } from "react";
import { DataForm, Product, Products } from "../types/Products";
import dayjs from "dayjs";

type Data<T> = T | null;

interface formProps {
  setFormValue: Dispatch<SetStateAction<Products>>;
  setStartDate: Dispatch<SetStateAction<string>>;
  data: Data<Product[]>; // these are given by the user so it's an array of the data
  products: Products;
}

export default function FormItem({ setFormValue, setStartDate, data, products }: formProps) {
  const now = dayjs();

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
    if (!data) {
      throw new Error("There's no products");
    }

    const productId = parseInt(formInfo.product_id) - 1;

    if (data.length < productId) {
      throw new Error("Invalid index");
    }

    const productItem = data[productId];
    productItem.quantity = parseInt(formInfo.quantity);

    setFormValue((prev) => ({
      ...prev,
      [productId]: productItem,
    }));

    setFormInfo({ product_id: "", quantity: "" });

    if (!Object.entries(products).length) {
      setStartDate(now.format("ddd, MMM D, YYYY h:mm A"));
    }
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
