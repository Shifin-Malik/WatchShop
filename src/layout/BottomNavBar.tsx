import { Button } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaSearch, FaHeart, FaUser } from "react-icons/fa";

const navs = [
  {
    icon: FaHome,
    label: "Home",
    href: "/",
  },
  {
    icon: FaSearch,
    label: "Search",
    href: "/search",
  },
  {
    icon: FaHeart,
    label: "Favorite",
    href: "/watchlist",
  },
  {
    icon: FaUser,
    label: "Profile",
    href: "/profile",
  },
];

export default function BottomNavBar() {
  const location = useLocation();

  return (
    <div className="fixed bottom-2  left-1/2 right-0    flex w-[90%]  -translate-x-1/2 justify-between gap-2 rounded-lg bg-secondary p-4 pt-5  shadow-[0_0_24px_0_rgba(0,0,0,.7)] [-webkit-backface-visibility:hidden] sm:max-w-sm">
      {navs.map(({ icon: Icon, label, href }, i) => {
        const isActive = location.pathname === href;

        return (
          <Link to={href} className="no-underline" key={i}>
            <Button
   key={label}
   className={`flex items-center justify-center rounded-full duration-300 ${
    isActive ? "text-black" : "bg-transparent text-white"
  }`}
  variant={isActive ? "filled" : "text"}
  size="sm"
  onClick={() => {}}
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}}
  placeholder="" // if applicable
  // Add any other required props

            >
              <Icon className="text-xl " />
              <span className={`duration-300 ${isActive ? "pt-1 w-20  h-8 rounded-md" : ""}`}>
                {isActive && label}
              </span>
            </Button>
          </Link>
        );
      })}
    </div>
  );
}