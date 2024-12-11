import { Products } from "../types/Products";

interface productItemProps {
  givenProducts: Products;
}

export default function ProductItem({ givenProducts }: productItemProps) {
  const parsedProducts = Object.entries(givenProducts);

  return (
    <>
      {parsedProducts.map(([id, product]) => (
        <div key={id} className="flex justify-between items-center border px-4 py-2 ">
          <div className="size-32 my-4 mr-6 basis-2/6">
            <img src={product.image} alt="" className="object-contain w-full h-full" />
          </div>

          <div className="basis-4/6">
            <p className="text-lg font-medium mb-4">
              {product.title} - ({product.id})
            </p>

            <p>Precio: ${product.price}</p>
            <p>Cantidad: {product.quantity}</p>
          </div>
        </div>
      ))}
    </>
  );
}
