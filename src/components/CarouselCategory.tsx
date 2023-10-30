import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useNavigate, createSearchParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import { api } from "@/utils/api";

const CarouselCategory = () => {
  function searchCategory(arg0: string): void {
    throw new Error("Function not implemented.");
  }

  // const navigate = useNavigate();
  // const searchCategory = (category: any) => {
  //   navigate({
  //     pathname: "search",
  //     search: `${createSearchParams({
  //       category: `${category}`,
  //       searchTerm: ``,
  //     })}`,
  //   });
  // };
  const { data: categories } = api.home.getAllCategory.useQuery();

  if (categories)
    return (
      <div className="m-3 bg-white">
        <div className="p-3 text-2xl font-semibold">Shop by Category</div>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
        >
          {categories.map((cat, i) => {
            return (
              <SwiperSlide
                key={i}
                onClick={() => searchCategory("Deals")}
                className="cursor-pointer"
              >
                <p>{cat.name}</p>
                <img src={"../images/category_0.jpg"} alt="Deal category" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
};

export default CarouselCategory;
