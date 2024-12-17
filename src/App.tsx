import { useEffect, useState } from "react";
import { useAxios } from "./custom/useAxios";

import { Product, Products } from "./types/Products";

import FormItem from "./components/FormItem";
import ProductCart from "./components/ProductCart";

function App() {
  const { data, error } = useAxios<Product[]>("https://fakestoreapi.com/products");
  const [products, setProducts] = useState<Products>({});
	const [date, setDate] = useState<string>("")

  useEffect(() => {
    console.log(products);
  }, [products]);

  if (error) {
    console.log(error);
    return <div>There's an error, review the console for debug it</div>;
  }

  return (
    <>
      <header className="px-4 py-4 border-b-2 text-center font-medium">Store - Mini Market</header>

      <section className="max-w-3xl mx-auto px-3 py-1	my-3 border">
        <FormItem setFormValue={setProducts} setStartDate={setDate} data={data} products={products} />
      </section>

      <section className="max-w-3xl mx-auto mb-8">
				<p className="text-xl mb-4 ">Carrito creado: {date} </p>
				<ProductCart products={products} />
      </section>
    </>
  );
}

export default App;
