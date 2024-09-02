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

// Define the type for card data
interface CardItem {
  imgSrc: string;
  title: string;
  price: string;
  quantity?: number; // Optional, default to 1 in handleAddToCart
}

// Define the type for cart items
interface CartItem {
  imgSrc: string;
  title: string;
  price: string;
  quantity: number; // Required property
}

// Sample data array
const cardData: CardItem[] = [
  { imgSrc: Watch1, title: "Rolexxxx", price: "$400.00" },
  { imgSrc: Watch2, title: "Rolex", price: "$300.00" },
  { imgSrc: Watch3, title: "Rolexxxxxxxxx", price: "$500.00" },
  { imgSrc: Watch4, title: "Rolexx", price: "$200.00" },
];

export function Card() {
  const { addToCart } = useCart(); // Destructure addToCart from useCart

  const handleAddToCart = (item: CardItem) => {
    const cartItem: CartItem = {
      imgSrc: item.imgSrc,
      title: item.title,
      price: item.price,
      quantity: item.quantity ?? 1, // Default quantity if not provided
    };
    addToCart(cartItem); // Pass cartItem with quantity
    toast.success("Product successfully added to cart");
  };

  return (
    <div className="w-full overflow-x-scroll py-2 px-2">
      <div className="flex justify-start gap-4">
        {cardData.map((item, index) => (
          <MaterialCard
            key={index}
            shadow={false}
            className="w-48 flex-shrink-0 bg-primary h-64 rounded-md"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <FaHeart className="absolute right-0 mt-1 w-10 h-4" />
            <CardHeader
              shadow={false}
              floated={false}
              className="h-32 mt-6"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="h-full w-full object-cover bg-primary mt-0 mb-0"
              />
            </CardHeader>
            <CardBody className="p-0 h-auto flex flex-col items-center justify-center"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <Typography color="black" className="font-medium !text-black mt-0 mb-0"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {item.title}
              </Typography>
              <Typography color="blue-gray" className="font-medium mt-0"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {item.price}
              </Typography>
            </CardBody>
            <CardFooter className="p-0 pt-0 flex justify-center relative bottom-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <Button
                className="w-40 h-12 bg-secondary shadow-none hover:scale-105"
                onClick={() => handleAddToCart(item)}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
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
