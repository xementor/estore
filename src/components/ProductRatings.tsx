import { StarIcon } from "@heroicons/react/24/outline";

const ProductRatings = (props: { avgRating: number; ratings: number }) => {
  const starNumber = props.avgRating;
  const ratingNumber = props.ratings;

  return (
    <div className="flex">
      {Array.from({ length: starNumber }, (_, i) => (
        <StarIcon
          key={i}
          className="h-[20px] fill-[#F1B61F] stroke-[#F1B61F]"
        />
      ))}
      {Array.from({ length: 5 - starNumber }, (_, i) => (
        <StarIcon key={i} className="h-[20px] stroke-[#F1B61F]" />
      ))}
      <span className="ml-3 text-blue-500">{ratingNumber} ratings</span>
    </div>
  );
};

export default ProductRatings;
