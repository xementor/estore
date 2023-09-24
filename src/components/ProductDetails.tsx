import { ProductBadge, ProductRatings } from ".";
import { Product } from "../utils/types/Product";

type ProductDetailsProps = { product: Product; ratings: boolean };

const ProductDetails = ({ product, ratings }: ProductDetailsProps) => {
  return (
    <div className="mb-1">
      <div className="mb-1 text-xl font-medium xl:text-2xl">
        {product.title}
      </div>
      <div className="mb-1 text-sm xl:text-base">
        by <span className="text-blue-500">{product.brand}</span>
      </div>
      {ratings && (
        <div className="mb-1 text-sm xl:text-base">
          <ProductRatings
            avgRating={product.avgRating}
            ratings={product.ratings}
          />
        </div>
      )}
      <div className="mb-1 text-xs font-bold xl:text-sm">
        {product.attribute}
      </div>
      <div>
        <ProductBadge badge={product.badge} />
      </div>
    </div>
  );
};

export default ProductDetails;
