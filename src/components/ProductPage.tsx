import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ProductDetails } from ".";
import { GB_CURRENCY } from "../utils/constants";
import { useRouter } from "next/router";
import { api } from "@/utils/api";
import Link from "next/link";

const ProductPage = () => {
  const router = useRouter()
  const productId = router.query.product

  if (typeof productId == "string") {
    
    return <Product productId={productId} />;
  } else {
    console.info("query", router.query);
    return <p>router query perse error</p>;
  }

}

const Product = ({productId}:{productId:string}) => {
  const {data: product} = api.product.getById.useQuery({id:parseInt(productId)});

  // const [product, setProduct] = useState<Product>();
  const [quantity, setQuantity] = useState("1");
  const dispatch = useDispatch();

  // const getProduct = () => {
  //   callAPI(`data/products.json`).then((productResults) => {
  //     setProduct(productResults[id]);
  //   });
  // };
 
  // const addQuantityToProduct = () => {
  //   setProduct((product.quantity = quantity));
  //   return product;
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  if (product) 

  return (
    product && (
      <div className="bg-amazonclone-background h-screen">
        <div className="m-auto min-w-[1000px] max-w-[1500px] p-4">
          <div className="grid grid-cols-10 gap-2">
            {/* Left */}
            <div className="col-span-3 m-auto rounded bg-white p-8">
              {/* <img src={`${product.image}`} alt="Main product" /> */}
            </div>
            {/* Middle */}
            <div className="col-span-5 divide-y divide-gray-400 rounded bg-white p-4">
              <div className="mb-3">
                <ProductDetails product={product}  />
              </div>
              <div className="mt-3 text-base xl:text-lg">
                {product.description}
              </div>
            </div>
            {/* Right */}
            <div className="col-span-2 rounded bg-white p-4">
              <div className="text-right text-xl font-semibold text-red-700 xl:text-2xl">
                {GB_CURRENCY.format(product.price)}
              </div>
              <div className="text-right text-base font-semibold text-gray-500 xl:text-lg">
                RRP:{" "}
                <span className="line-through">
                  {/* {GB_CURRENCY.format(product.oldPrice)} */}
                </span>
              </div>
              <div className="mt-3 text-sm font-semibold text-blue-500 xl:text-base">
                FREE Returns
              </div>
              <div className="mt-1 text-sm font-semibold text-blue-500 xl:text-base">
                FREE Delivery
              </div>
              <div className="mt-1 text-base font-semibold text-green-700 xl:text-lg">
                In Stock
              </div>
              <div className="mt-1 text-base xl:text-lg">
                Quantity:
                <select
                  onChange={(e) => setQuantity(e.target.value)}
                  className="rounded-md border bg-white p-2 focus:border-indigo-600"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <Link href={"/checkout"}>
                <button
                  // onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                  className="btn"
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
  else return <h1>Loading Product ...</h1>;
};


export default ProductPage;
