import { useAppDispatch } from "@/store/hook";
import { setSearchText, setSearchedProduct } from "@/store/productSlice";
import { api } from "@/utils/api";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useState, useEffect, MouseEvent } from "react";
import { useDispatch } from "react-redux";

type Suggestion = {
  id: number;
  title: string;
};

const Search = () => {
  // const { data: secretMessage } = api.home.getSecretMessage.useQuery(undefined);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onHandleSubmit = async () => {
    // e.preventDefault();
    await router.push("/search");
  };

  return (
    <div className="w-[100%]">
      <div className="bg-amazonclone-yellow flex h-10 items-center rounded">
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Search.."
          // value={searchTerm}
          onChange={(e) => {
            console.log(e.target.value);
            dispatch(setSearchedProduct(e.target.value));
          }}
        />
        <button onClick={() => void onHandleSubmit()} className="w-[45px]">
          <MagnifyingGlassIcon className="m-auto h-[27px] text-white" />
        </button>
      </div>
    </div>
  );
};

export default Search;
