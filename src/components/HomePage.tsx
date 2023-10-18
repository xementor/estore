import { api } from "@/utils/api";
import {
  Carousel,
  HomePageCard,
  CarouselCategory,
  CarouselProduct,
  NavBar,
} from ".";
import { useEffect, useState } from "react";
import { Product, Category } from "@prisma/client";
import { ProductViews } from "./ProductView";
import { useAppDispatch } from "@/store/hook";
import { setProducts } from "@/store/productSlice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { data: dbProducts, isLoading } = api.product.getAll.useQuery(
    undefined,
    {
      onSuccess(data) {
        dispatch(setProducts(data));
      },
    },
  );

  return (
    <div className="bg-amazonclone-background">
      <NavBar />
      <div className="m-auto min-w-[1000px] max-w-[1500px]">
        {isLoading && <p>Loading..</p>}
        {dbProducts && <ProductViews allProducts={dbProducts} />}
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
