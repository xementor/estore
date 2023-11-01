import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Search } from ".";
import Link from "next/link";
import AuthShowcase from "./AuthShowcase";
import { useAppSelector } from "@/store/hook";

const NavBar = () => {
  const itemsNumber = useAppSelector((state) => state.cart.productsNumber);
  return (
    <header className="min-w-[1000px] bg-accent">
      <div className="bg-amazonclone flex h-[60px] justify-between">
        {/* Left */}
        <div className="m-4 flex items-center">
          <Link href={"/"}>
            <div className=" text-3xl font-bold text-white">ESTORE</div>
          </Link>
        </div>

        <div className="m-4 flex items-center">
          <div className="relative flex grow items-center">
            <Search />
          </div>
          <div className="pl-4 pr-4">
            <AuthShowcase />
          </div>

          <Link href={"/checkout"}>
            <div className="flex pl-3 pr-3">
              <ShoppingCartIcon className=" h-12 text-white" />
              <div className="relative">
                <div className="badge badge-secondary  -m-2 font-bold ">
                  {itemsNumber}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
