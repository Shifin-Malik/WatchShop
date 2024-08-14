import { FaShoppingCart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="props props-invert fixed top-0 w-full h-auto">
      <div className="flex items-center justify-between px-4 py-2 text-secondary">
        <Link to="/getting-started">

        <FaArrowLeft className="w-8 h-8 text-secondary " />
        </Link>
      
        <h2 className="text-secondary text-center mt-0 md:text-4xl">Sonic Time</h2>
        <FaShoppingCart className="w-8 h-8" />
      </div>
      <div className="px-4 mt-0">
        <h2 className="mt-0 text-secondary font-thin">EXPLORE <br /><span className="font-bold">TOP BRANDS WATCHES</span></h2>
        
      </div>
    </div>
  );
}

export default Header;


