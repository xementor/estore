import { api } from "@/utils/api";
import { Category, Product } from "@prisma/client";
import clsx from "clsx";
import { useState } from "react";

export const ProductViews = (props: {
  headerTitle?: string;
  allProducts: Product[];
}) => {
  const [products, setProducts] = useState<Product[]>(props.allProducts);
  const { data: categories } = api.home.getAllCategory.useQuery();

  const [selectedBtn, setBtn] = useState<number>();

  function filterProducts(catId?: number, key?: number) {
    setBtn(key);

    if (catId) {
      setProducts(props.allProducts.filter((prod) => prod.categoryId == catId));
    } else setProducts(props.allProducts);
  }

  return (
    <div>
      <div className="flex items-center gap-x-4 py-4">
        <h3 className="text-2xl">{props.headerTitle ?? "All Products"}</h3>
        <div className="flex gap-x-3">
          <button
            onClick={() => filterProducts()}
            className={clsx(
              "btn btn-sm",
              typeof selectedBtn == "undefined" && "btn-primary",
            )}
          >
            All
          </button>
          {categories?.map((cat, i) => (
            <button
              className={clsx("btn btn-sm", i == selectedBtn && "btn-primary")}
              key={i}
              onClick={() => filterProducts(cat.id, i)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
      {products &&
        products.map((product, i) => {
          return (
            <div className="border-2 p-4">
              <p>{product.name}</p>
            </div>
          );
        })}
    </div>
  );
};
