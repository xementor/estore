import { ProductBadge, ProductRatings } from ".";
import { Product } from "@prisma/client";

type ProductDetailsProps = { product: Product };

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="mb-1">
      <div className="mb-1 text-xl font-medium xl:text-2xl">{product.name}</div>
      <div className="mb-1 text-sm xl:text-base">
        by <span className="text-blue-500">{product.categoryId}</span>
      </div>
      <div className="mb-1 text-sm xl:text-base">
        <ProductRatings avgRating={10} ratings={6} />
      </div>
      <div className="mb-1 text-xs font-bold xl:text-sm">{product.price}</div>
      <div>
        <ProductBadge badge={product.name} />
      </div>
    </div>
  );
};

export default ProductDetails;
