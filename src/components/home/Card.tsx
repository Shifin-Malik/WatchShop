import React from "react";
import {
  Card as MaterialCard,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FaHeart } from "react-icons/fa";
import Watch1 from "/images/watch1.png";
import Watch2 from "/images/watch2.png";
import Watch3 from "/images/watch3.png";
import Watch4 from "/images/watch4.png";
import { useCart } from "../../store/CartContext";
import { toast } from "react-toastify";

// Sample data array
const cardData = [
  { imgSrc: Watch1, title: "Rolexxxx", price: "$400.00" },
  { imgSrc: Watch2, title: "Rolex", price: "$300.00" },
  { imgSrc: Watch3, title: "Rolexxxxxxxxx", price: "$500.00" },
  { imgSrc: Watch4, title: "Rolexx", price: "$200.00" },
];

export function Card() {
  const { addToCart } = useCart(); // Destructure addToCart from useCart

  const handleAddToCart = (item) => {
    addToCart(item); // Call addToCart with the item details
    toast.success("Product successfully added to cart");
  };

  return (
    <div className="w-full overflow-x-scroll py-2 px-2">
      <div className="flex justify-start gap-4">
        {cardData.map((item, index) => (
          <MaterialCard
            key={index}
            shadow={false}
            className="w-48 flex-shrink-0 bg-primary h-64 rounded-md"
          >
            <FaHeart className="absolute right-0 mt-1 w-10 h-4" />
            <CardHeader
              shadow={false}
              floated={false}
              className="h-32 mt-6"
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="h-full w-full object-cover bg-primary mt-0 mb-0"
              />
            </CardHeader>
            <CardBody className="p-0 h-auto flex flex-col items-center justify-center">
              <Typography
                color="black"
                className="font-medium !text-black mt-0 mb-0"
              >
                {item.title}
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium mt-0"
              >
                {item.price}
              </Typography>
            </CardBody>
            <CardFooter className="p-0 pt-0 flex justify-center relative bottom-4">
              <Button
                className="w-40 h-12 bg-secondary shadow-none hover:scale-105"
                onClick={() => handleAddToCart(item)} // Pass item to the handler
              >
                Add to Cart
              </Button>
            </CardFooter>
          </MaterialCard>
        ))}
      </div>
    </div>
  );
}

export default Card;
