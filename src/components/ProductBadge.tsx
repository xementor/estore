type ProductBadgeProps = { badge: string };
const ProductBadge = ({ badge }: ProductBadgeProps) => {
  if (badge === "choice") {
    return (
      <span className="bg-slate-800 p-1 text-xs text-white xl:text-sm">
        Amazon&apos;s <span className="text-orange-500">Choice</span>
      </span>
    );
  } else if (badge === "seller") {
    return (
      <span className="bg-orange-500 p-1 text-xs text-white xl:text-sm">
        #1 Best Seller
      </span>
    );
  } else if (badge === "limited") {
    return (
      <span className="bg-red-500 p-1 text-xs text-white xl:text-sm">
        Limited Time Deal
      </span>
    );
  }

  return <div></div>;
};

export default ProductBadge;
