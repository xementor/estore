import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Search } from ".";
import Link from "next/link";
import AuthShowcase from "./AuthShowcase";

const NavBar = () => {
  // const cart = useSelector((state) => {
  //   return state.cart.productsNumber;
  // });
  return (
    <header className="min-w-[1000px] bg-accent">
      <div className="bg-amazonclone flex h-[60px] ">
        {/* Left */}
        <div className="m-4 flex items-center">
          <Link href={"/"}>
            <img
              className="m-2 h-[35px] w-[100px]"
              src={"../images/amazon.png"}
              alt="Amazon logo"
            />
          </Link>
        </div>
        {/* Middle */}
        <div className="relative flex grow items-center">
          <Search />
        </div>
        {/* Right */}
        <div className="m-4 flex items-center">
          <div className="pl-4 pr-4">
            <AuthShowcase />
            <div className="text-sm font-bold xl:text-base">
              Accounts & Lists
            </div>
          </div>

          <Link href={"/checkout"}>
            <div className="flex pl-3 pr-3">
              <ShoppingCartIcon className="h-[48px]" />
              <div className="relative">
                <div className="absolute right-[9px] m-2 font-bold text-orange-400">
                  {/* {cart} */}
                </div>
              </div>
              <div className="mt-7 text-xs font-bold xl:text-sm">Cart</div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
