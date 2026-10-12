import Image from "next/image";
import logo from "../../app/assets/logo.png";
import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Cointainer from "./Cointainer";

const Navber = () => {
  return (
    <div className="border-b-2 border-gray-300">
      <Cointainer>
        <nav className="flex items-center justify-between flex-wrap  p-3">
          <Image src={logo} width={150} height={250} alt="website logo"></Image>
          <div className="h-12 md:w-100 lg:w-150 bg-white rounded-full hidden md:flex items-center justify-between gap-3 px-1.5">
            <div>
              <span className="rounded-full text-gray-700 py-2.25 px-2 mr-2 bg-gray-200">
                <select
                  name="catagory"
                  className="outline-0"
                >
                  <option value="">Catagory</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Tablet">Tablet</option>
                  <option value="Gadget">Gadget</option>
                  <option value="Mobile Phone">Mobile Phone</option>
                  <option value="Printer">Printer</option>
                  <option value="Sound">Sound</option>
                  <option value="Security">Security</option>
                </select>
              </span>
              <input
                type="text"
                name="text"
                id=""
                placeholder="Search Here Anything"
                className="text-gray-900 text-sm outline-0 md:w-40 lg:w-80"
              />
            </div>

            <Search className="w-10 h-10 text-white font-extralight bg-black p-2 rounded-full" />
          </div>
          <ul className="hidden md:flex md:gap-2 lg:gap-3 items-center">
            <li className="">
              <Heart className="w-10 h-10 p-2 border-2 broder-gray-500 rounded-full" />
            </li>
            <li>
              <ShoppingCart className="w-10 h-10 p-2 border-2 broder-gray-500 rounded-full" />
            </li>
            <li>
              <Link href="/login">
                <button className="w-24 p-2 font-bold border-2 broder-gray-500 rounded-full">
                  Sign In
                </button>
              </Link>
            </li>
          </ul>
          <Menu className="block md:hidden" />
        </nav>
      </Cointainer>
    </div>
  );
};

export default Navber;
