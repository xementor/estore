import { api } from "@/utils/api";
import {
  Carousel,
  HomePageCard,
  CarouselCategory,
  CarouselProduct,
  NavBar,
} from ".";
import { useEffect, useState } from "react";
import { Product } from "@prisma/client";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { data: dbProducts } = api.product.getAll.useQuery(undefined, {
    onSuccess(data) {
      setProducts(data);
    },
  });
  const { data: categories } = api.home.getAllCategory.useQuery();

  function filterProducts(catId?: number) {
    if (catId && dbProducts) {
      setProducts(dbProducts.filter((prod) => prod.categoryId == catId));
    }
  }

  return (
    <div className="bg-amazonclone-background">
      <NavBar />
      <div className="m-auto min-w-[1000px] max-w-[1500px]">
        <div>
          <div className="flex items-center gap-x-4 py-4">
            <h3 className="text-2xl">All products</h3>
            <div className="flex gap-x-3">
              {categories?.map((cat, i) => (
                <button
                  className="btn btn-sm"
                  key={i}
                  onClick={() => filterProducts(cat.id)}
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

        {/* <CloneUi /> */}
      </div>
    </div>
  );
};

const CloneUi = () => {
  return (
    <>
      <Carousel />
      <div className="-mt-80 grid grid-cols-3 xl:grid-cols-4">
        <HomePageCard
          title={"We have a surprise for you"}
          img={"../images/home_grid_1.jpg"}
          link={"See terms and conditions"}
        />
        <HomePageCard
          title={"Watch The Rings of Power"}
          img={"../images/home_grid_2.jpg"}
          link={"Start streaming now"}
        />
        <HomePageCard
          title={"Unlimited Streaming"}
          img={"../images/home_grid_3.jpg"}
          link={"Find out more"}
        />
        <HomePageCard
          title={"More titles to explore"}
          img={"../images/home_grid_4.jpg"}
          link={"Browse Kindle Unlimited"}
        />
        <HomePageCard
          title={"Shop Pet Supplies"}
          img={"../images/home_grid_5.jpg"}
          link={"See more"}
        />
        <HomePageCard
          title={"Spring Sale"}
          img={"../images/home_grid_6.jpg"}
          link={"See the deals"}
        />
        <HomePageCard
          title={"Echo Buds"}
          img={"../images/home_grid_7.jpg"}
          link={"See more"}
        />
        <HomePageCard
          title={"Family Plan: 3 months free"}
          img={"../images/home_grid_8.jpg"}
          link={"Learn more"}
        />
        <div className="m-3 pt-8">
          <img
            className="xl:hidden"
            src={"../images/banner_image_2.jpg"}
            alt="Banner 2"
          />
        </div>
      </div>
      <CarouselProduct />
      <CarouselCategory />
      <div className="h-[200px]">
        <img
          className="m-auto h-[100%]"
          src={"../images/banner_image.jpg"}
          alt="Banner 1"
        />
      </div>
    </>
  );
};

export default HomePage;
