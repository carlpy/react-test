import { Products, Product, calculatedProperties } from "../types/Products";

import ProductItem from "./ProductItem";

interface props {
  products: Products;
}

export default function ProductCart({ products }: props) {
  const parsedProducts = Object.entries(products);
  const isCartEmpty = !Object.entries(products).length;

  function getTotal(property: calculatedProperties) {
    return parsedProducts.reduce((prev, [, value]: [string, Product]) => {
      if (property == "price") {
        return value["price"] * value["quantity"] + prev;
      }

      return (value[property] || 0) + prev;
    }, 0);
  }


  const totalProducts = getTotal(calculatedProperties.Quantity);
  const totalCost = getTotal(calculatedProperties.Price);

  console.log(parsedProducts, totalProducts);

  if (isCartEmpty) {
    return <div>No hay productos por el momento</div>;
  }

  return (
    <>
      <p className="text-2xl font-medium mb-5">Productos agregados: </p>
      <table className="border-collapse table-auto border border-slate-500 w-full text-center">
        <thead>
          <tr>
            <th className="border border-slate-500">Cantidad</th>
            <th className="border border-slate-500">Nombre</th>
            <th className="border border-slate-500">Precio U</th>
            <th className="border border-slate-500">Precio T</th>
            <th className="border border-slate-500">Imagen</th>
          </tr>
        </thead>
        <tbody>
          {parsedProducts.map(([key, value]) => (
            <ProductItem key={key} product={value} />
          ))}
        </tbody>
      </table>
      <div className="border border-gray-500 mt-4">
        <p>Precio total: ${totalCost}</p>
        <p>Cantidad total: {totalProducts}</p>
      </div>
    </>
  );
}
