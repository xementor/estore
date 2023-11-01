import { ProductDetails } from ".";
import { GB_CURRENCY } from "../utils/constants";
import {
  removeFromCart,
  decrementInCart,
  incrementInCart,
} from "../store/cartSlice";

import { useAppDispatch, useAppSelector } from "@/store/hook";
import Link from "next/link";

const Checkout = () => {
  const products = useAppSelector((state) => state.cart.products);
  const itemsNumber = useAppSelector((state) => state.cart.productsNumber);
  const subtotal = useAppSelector((state) =>
    state.cart.products.reduce(
      (subtotal, product) => subtotal + product.price * product.quantity,
      0,
    ),
  );
  const dispatch = useAppDispatch();

  return (
    <div className="bg-amazonclone-background h-screen">
      <div className="m-auto  pt-8">
        <div className="grid grid-cols-8 gap-10">
          {/* Products */}
          <div className="col-span-6 bg-base-300">
            <div className="m-4 text-2xl xl:text-3xl">Shopping Cart</div>
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="mr-4 grid grid-cols-12 divide-y divide-gray-400">
                    <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                      <div className="col-span-2">
                        <Link href={`/product/${product.id}`}>
                          <img
                            className="m-auto p-4"
                            src={`/images/product_${product.id}.jpg`}
                            alt="Checkout product"
                          />
                        </Link>
                      </div>
                      <div className="col-span-6">
                        <div className="mt-2 font-medium ">
                          <Link href={`/product/${product.id}`}>
                            <ProductDetails product={product} />
                          </Link>
                        </div>
                        <div>
                          <button
                            className="mb-1 mt-2 cursor-pointer rounded text-sm font-semibold text-blue-500 xl:text-base"
                            onClick={() => dispatch(removeFromCart(product.id))}
                          >
                            Delete
                          </button>
                        </div>
                        <div className="grid w-20 grid-cols-3 text-center">
                          <div
                            className="btn btn-accent btn-sm cursor-pointer rounded text-xl xl:text-2xl"
                            onClick={() =>
                              dispatch(decrementInCart(product.id))
                            }
                          >
                            -
                          </div>
                          <div className=" text-lg xl:text-xl">
                            {product.quantity}
                          </div>
                          <div
                            className="btn btn-accent btn-sm cursor-pointer rounded text-xl xl:text-2xl"
                            onClick={() =>
                              dispatch(incrementInCart(product.id))
                            }
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="mr-4 mt-2 text-lg font-semibold xl:text-xl">
                        {GB_CURRENCY.format(product.price)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="mb-4 mr-4 text-right text-lg xl:text-xl">
              Subtotal ({itemsNumber} items):{" "}
              <span className="font-semibold">
                {GB_CURRENCY.format(subtotal)}
              </span>
            </div>
          </div>
          {/* Checkout */}
          <div className="col-span-2 h-[250px] rounded bg-base-300 p-7">
            <div className="mb-2 text-xs text-green-800 xl:text-sm">
              Your order qualifies for{" "}
              <span className="font-bold">FREE DELIVERY</span>. Delivery Details
            </div>
            <div className="mb-4 text-base xl:text-lg">
              Subtotal ({itemsNumber} items):{" "}
              <span className="font-semibold">
                {GB_CURRENCY.format(subtotal)}
              </span>
            </div>
            <button className="btn btn-success">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
