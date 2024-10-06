// src/components/WatchListItems.tsx
import {
  Card as MaterialCard,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import { FaHeartBroken } from "react-icons/fa"; // Icon for removing from watchlist
import { useWatchlist, CardItem } from "../../store/WatchlistContext";
import { useCart } from "../../store/CartContext";
import { toast } from "react-toastify";

function WatchListItems() {
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const { addToCart } = useCart();

  const handleRemoveFromWatchlist = (item: CardItem) => {
    removeFromWatchlist(item);
    toast.info("Product removed from watchlist");
  };

  const handleAddToCart = (item: CardItem) => {
    const cartItem = {
      imgSrc: item.imgSrc,
      title: item.title,
      price: item.price,
      quantity: 1, // Default quantity
    };
    addToCart(cartItem);
    toast.success("Product successfully added to cart");
  };

  return (
    <div className="container mx-auto p-4">
      <Typography variant="h4" className="mb-4">
        Your Watchlist
      </Typography>
      {watchlist.length === 0 ? (
        <Typography variant="body1">Your watchlist is empty.</Typography>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {watchlist.map((item, index) => (
            <MaterialCard
              key={index}
              shadow={false}
              className="w-full bg-primary h-80 rounded-md relative"
            >
              <FaHeartBroken
                className="absolute top-2 right-2 text-red-500 cursor-pointer"
                size={20}
                onClick={() => handleRemoveFromWatchlist(item)}
                title="Remove from Watchlist"
              />
              <CardHeader shadow={false} floated={false} className="h-40 mt-6">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="h-full w-full object-cover bg-primary mt-0 mb-0"
                />
              </CardHeader>
              <CardBody className="p-2 h-auto flex flex-col items-center justify-center">
                <Typography
                  color="black"
                  className="font-medium !text-black mt-0 mb-0"
                >
                  {item.title}
                </Typography>
                <Typography color="blue-gray" className="font-medium mt-0">
                  {item.price}
                </Typography>
              </CardBody>
              <CardFooter className="p-2 flex justify-center">
                <Button
                  className="w-32 h-10 bg-secondary shadow-none hover:scale-105"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </MaterialCard>
          ))}
        </div>
      )}
    </div>
  );
}

export default WatchListItems;
