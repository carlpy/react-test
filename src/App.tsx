import { useEffect, useState } from "react";
import ProductItem from "./components/ProductItem";
import { useAxios } from "./custom/useAxios";
import { Product, Products } from "./types/Products";
import FormItem from "./components/FormItem";

function App() {
  const { data, error } = useAxios<Product[]>("https://fakestoreapi.com/products");
  const [products, setProducts] = useState<Products>({});

  useEffect(() => {
    console.log(products);
  }, [products]);

  console.log(data);

  if (error) {
    <div>There's an error, review the console for debug it</div>;
  }

  return (
    <>
      <header className="px-4 py-4 border-b-2 text-center font-medium">Store - Mini Market</header>

      <section className="max-w-3xl mx-auto px-3 py-1	my-3 border">
        <FormItem setFormValue={setProducts} products={data} />
      </section>

      <section className="max-w-3xl mx-auto mb-8">
        <div>
          {!Object.keys(products).length ? (
            <div className="">No hay productos por el momento... </div>
          ) : (
            <>
              <p className="text-2xl font-medium mb-5">Productos agregados: </p>
              <div className="mx-auto">
                <ProductItem givenProducts={products} />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
