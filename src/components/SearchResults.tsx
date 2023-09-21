import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDetails } from ".";
import { GB_CURRENCY } from "../utils/constants";

export type Product = {
  id: number;
  title: string;
  price: number;
  image_small: string;
  image_large: string;
  description: string;
  category: string;
  ratings: number;
  avgRating: number;
  brand: string;
  attribute: string;
  quantity: number;
  badge: string;
};

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);

  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    //   if (category)
    //     callAPI(`data/search.json`).then((searchResults) => {
    //       const categoryResults = searchResults[category];
    //       if (searchTerm) {
    //         const results = categoryResults.filter((product: { title: string }) =>
    //           product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    //         );
    //         setProducts(results);
    //       } else {
    //         setProducts(categoryResults);
    //       }
    //     });
    // };

    // useEffect(() => {
    //   getSearchResults();
    // }, [searchParams]);

    return (
      <div className="m-auto min-w-[1200px] max-w-[1300px] pt-4">
        {products.map((product, key) => {
          return (
            <Link key={key} to={`/product/${product.id}`}>
              <div className="mb-1 mt-1 grid h-[250px] grid-cols-12 rounded ">
                <div className="col-span-2 bg-gray-200 p-4">
                  <img
                    className="m-auto"
                    src={product.image_small}
                    alt="Search result product"
                  />
                </div>
                <div className="col-span-10 border border-gray-100 bg-gray-50 hover:bg-gray-100 ">
                  <div className="p-2 font-medium text-black">
                    <ProductDetails product={product} ratings={true} />
                    <div className="pt-1 text-xl xl:text-2xl">
                      {GB_CURRENCY.format(product.price)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };
};
export default SearchResults;
