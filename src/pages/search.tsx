import { NavBar, SearchResults } from "@/components";
import { ProductViews } from "@/components/ProductView";
import { useAppSelector } from "@/store/hook";
import React, { useMemo } from "react";

function SearchPage() {
  const { searchedProduct } = useAppSelector((state) => state.product);

  return (
    <>
      <div>
        <ProductViews allProducts={searchedProduct} />
      </div>
    </>
  );
}

export default SearchPage;
