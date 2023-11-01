import { ProductViews } from "@/components/ProductView";
import { useAppSelector } from "@/store/hook";

function SearchPage() {
  const { searchedProduct } = useAppSelector((state) => state.product);

  return (
    <div className="m-auto max-w-4xl">
      <ProductViews
        allProducts={searchedProduct}
        headerTitle="Searched Products"
      />
    </div>
  );
}

export default SearchPage;
