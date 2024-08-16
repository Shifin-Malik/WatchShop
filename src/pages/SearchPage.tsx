import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Input } from "@material-tailwind/react";
function SearchPage() {
  return (
    <div className="props props-invert fixed top-0 w-full h-auto">
      <div className="flex items-center justify-between px-4 py-2 text-secondary">
        <Link to="/">
          <FaBars className="w-8 h-8 text-secondary " />
        </Link>

        <FaShoppingCart className="w-8 h-8" />

      </div>
      <div className="w-72 ml-10 ">
      <Input className="bg-zink-200" placeholder="Search"/>
    </div>

    </div>
  );
}

export default SearchPage;
