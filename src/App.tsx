import { useAxios } from "./custom/useAxios";
import { Product } from "./types/Products";

function App() {
  const { data, loading, error } = useAxios<Product[]>("https://fakestoreapi.com/products");
  console.log(data);

  if (error) {
    <div>There's an error, review the console for debug it</div>;
  }

  return (
    <>
      <header className="px-4 py-4 border-b-2 text-center font-medium">Store - Mini Market</header>

      <section className="max-w-2xl mx-auto px-3 py-1	my-3 border">
        <form className="flex justify-between">
          <div className="my-2">
            <input
              type="number"
              id="quantity"
              placeholder="Quantity"
              className="border px-2 py-1 text-sm"
            />
          </div>
          <div className="my-2">
            <input
              type="number"
              id="id_product"
              placeholder="Product id"
              className="border px-2 py-1 text-sm"
            />
          </div>

          <button className="border bg-blue-600 text-white px-1 py-1">Add product</button>
        </form>
      </section>

      <main className="mx-auto w-3/4 grid grid-cols-3 gap-4">
        {/* Here comes the place where the user add the avaliable products */}

        {loading ? (
          <div className="text-2xl font-medium text-green-400">Loading products...</div>
        ) : (
          data?.map((product) => {
            return (
              
            );
          })
        )}
        {/* Here comes the Cart which renders the products chosen by the user */}
      </main>
    </>
  );
}

export default App;
