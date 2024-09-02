

import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { IoSearchOutline, IoOptionsOutline } from "react-icons/io5";

function SearchHeader() {
  return (
    <div className=" fixed top-0 w-full h-screen bg-primary">
    <div className="flex items-center justify-between px-4 py-2">
      <Link to="/">
        <FaBars className="w-8 h-8 text-secondary" />
      </Link>
      <div className="relative">
          <Link to="/cart">
            <FaShoppingCart className="text-black w-8 h-8" />
          </Link>
          <span className="absolute -top-2 -right-2 w-5 h-5 text-sm font-bold text-center text-white bg-red-600 rounded-full">
            2
          </span>
        </div>
    </div>

    <div className="md:w-[1330px] w-[350px] ml-5 mt-1 flex gap-4">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="Search"
          className="!h-14 pl-12  bg-white rounded-2xl border border-gray-300 text-gray-900 shadow-lg ring-4 ring-transparent placeholder:text-gray-500 !focus:border-gray-900 !focus:ring-gray-900/10" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} success={undefined}          />
        <IoSearchOutline className="absolute top-4 left-4 text-gray-500 w-6 h-6" />
      </div>
      <div className="bg-white p-2 rounded-lg flex items-center justify-center mt-1 border border-gray-300 shadow-lg ring-4 ring-transparent">
        <IoOptionsOutline className="text-yellow-500 w-6 h-6" />
      </div>
    </div>
  
    <h2 className="text-secondary mt-3 pl-5">Category</h2>
  </div>
  )
}

export default SearchHeader
