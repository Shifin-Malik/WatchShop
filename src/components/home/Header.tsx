
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../store/CartContext";

function Header() {
  const { cartItems } = useCart();

  return (
    <header className="fixed top-0 w-full h-auto">
      <div className="flex items-center justify-between px-4 py-2 text-secondary">
        <Link to="/getting-started">
          <FaArrowLeft className="w-8 h-8 text-secondary" />
        </Link>

        <h2 className="text-secondary text-center mt-0 md:text-4xl">Sonic Time</h2>

        <div className="relative">
          <Link to="/cart">
            <FaShoppingCart className="text-black w-8 h-8" />
          </Link>
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 text-sm font-bold text-center text-white bg-red-600 rounded-full">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>

      <div className="px-4 mt-0">
        <h2 className="mt-0 text-secondary font-thin">
          EXPLORE <br />
          <span className="font-bold">TOP BRANDS WATCHES</span>
        </h2>
      </div>
    </header>
  );
}

export default Header;
