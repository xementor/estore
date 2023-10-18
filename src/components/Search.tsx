import { api } from "@/utils/api";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useState, useEffect, MouseEvent } from "react";

type Suggestion = {
  id: number;
  title: string;
};

const Search = () => {
  // const { data: secretMessage } = api.home.getSecretMessage.useQuery(undefined);
  const { data: categories } = api.home.getAllCategory.useQuery(undefined);

  console.log("cat", categories);

  const [suggestions, setSuggestions] = useState<Suggestion[]>();
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const router = useRouter();

  const onHandleSubmit = (e: any) => {
    e.preventDefault();

    router.push("/search");

    // navigate({
    //   pathname: "search",
    //   search: `${createSearchParams({
    //     category: `${category}`,
    //     searchTerm: `${searchTerm}`,
    //   })}`,
    // });

    setSearchTerm("");
    setCategory("All");
  };

  // const getSuggestions = () => {
  //   callAPI(`data/suggestions.json`).then((suggestionResults) => {
  //     setSuggestions(suggestionResults);
  //   });
  // };

  // useEffect(() => {
  //   getSuggestions();
  // }, []);

  return (
    <div className="w-[100%]">
      <div className="bg-amazonclone-yellow flex h-10 items-center rounded">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="border bg-gray-300 p-2 text-xs text-black xl:text-sm"
        >
          <option>All</option>
          {categories &&
            categories.map((cat, i) => <option key={i}>{cat.name}</option>)}
        </select>
        <input
          className="flex h-[100%] grow items-center rounded-l text-black"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={onHandleSubmit} className="w-[45px]">
          <MagnifyingGlassIcon className="m-auto h-[27px] stroke-slate-900" />
        </button>
      </div>
      {suggestions && (
        <div className="absolute z-40 w-full bg-white text-black">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => setSearchTerm(suggestion.title)}
              >
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
