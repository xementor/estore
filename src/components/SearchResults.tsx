import { useEffect, useState } from "react";
import { ProductDetails } from ".";
import { GB_CURRENCY } from "../utils/constants";
import { api } from "@/utils/api";
import Link from "next/link";
import { addToCart } from "@/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Product } from "@prisma/client";
import Image from "next/image";

const SearchResults = () => {
  // const [searchParams] = useSearchParams();
  const { data: products } = api.product.getAll.useQuery();

  return (
    <div className="m-auto min-w-[1200px] max-w-[1300px] pt-4">
      <h1>Searched product</h1>
      {products?.map((product, key) => {
        return (
          // <Link key={key} href={`/product/${product.id}`}>
          <ProductC key={key} product={product} />
          // </Link>
        );
      })}
    </div>
  );
};

export default SearchResults;

export function ProductC({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const cartProduct = useAppSelector((state) =>
    state.cart.products.find((p) => p.id == product.id),
  );
  return (
    <div>
      <div className="flex rounded">
        <div className="col-span-2 bg-base-100 p-4">
          <div className="relative h-52 w-52 shrink-0">
            <Image
              // width={200}
              // height={200}
              objectFit="contain"
              fill
              src={`/images/product_${product.id}.jpg`}
              alt="Search result product"
            />
          </div>
        </div>
        <div className=" border-base-100 bg-base-100 hover:bg-base-200 ">
          <div className="p-2 font-medium ">
            <ProductDetails product={product} />
            <div className="pt-1 text-xl xl:text-2xl">
              {GB_CURRENCY.format(product.price)}
            </div>
            <button
              onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
              className="btn btn-warning btn-sm"
            >
              Add to cart
              {cartProduct && (
                <div className="badge badge-secondary">
                  {cartProduct.quantity}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
