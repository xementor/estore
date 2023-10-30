import { useEffect, useState } from "react";
import { ProductDetails } from ".";
import { GB_CURRENCY } from "../utils/constants";
import { api } from "@/utils/api";
import Link from "next/link";
import { addToCart } from "@/store/cartSlice";
import { useAppDispatch } from "@/store/hook";
import { Product } from "@prisma/client";
import Image from "next/image";

const SearchResults = () => {
  // const [searchParams] = useSearchParams();
  const { data: products } = api.product.getAll.useQuery();

  return (
    <div className="m-auto min-w-[1200px] max-w-[1300px] pt-4">
      <h1>Searched product</h1>
      {products &&
        products.map((product, key) => {
          return (
            // <Link key={key} href={`/product/${product.id}`}>
            <ProductC product={product} />
            // </Link>
          );
        })}
    </div>
  );
};

export default SearchResults;

export function ProductC({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="mb-1 mt-1 grid h-[250px] grid-cols-12 rounded">
        <div className="col-span-2 bg-gray-200 p-4">
          <div className="h-52 w-52">
            <Image
              width={200}
              height={200}
              objectFit="contain"
              // fill
              src={`/images/product_${product.id}.jpg`}
              alt="Search result product"
            />
          </div>
        </div>
        <div className="col-span-10 border border-gray-100 bg-gray-50 hover:bg-gray-100 ">
          <div className="p-2 font-medium text-black">
            <ProductDetails product={product} />
            <div className="pt-1 text-xl xl:text-2xl">
              {GB_CURRENCY.format(product.price)}
            </div>
            <button
              onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
              className="rounded bg-blue-200 p-2"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
