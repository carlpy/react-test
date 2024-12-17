import { Product } from "../types/Products";

interface props {
  product: Product;
}

export default function ProductItem({ product }: props) {
  return (
    <tr>
      <td className="border border-slate-500">{product.quantity}</td>
      <td className="font-medium border border-slate-500">{product.title}</td>
      <td className="border border-slate-500">${product.price}</td>
      <td className="border border-slate-500">
        ${Math.floor(product.price * (product.quantity ?? 1))}{" "}
      </td>

      <td className="size-20 my-4 mr-6">
        <img src={product.image} alt="" className="object-center  w-full h-full aspect-square" />
      </td>
    </tr>
  );
}
