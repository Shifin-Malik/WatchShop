import { Card as MaterialCard, CardHeader, CardBody, CardFooter, Button, Typography } from "@material-tailwind/react";
import { FaHeart } from "react-icons/fa";
import Watch2 from '../../../public/images/watch2.png';

// Sample data array
const cardData = [
  { imgSrc: Watch2, title: "Rolex", price: "$100.00" },
  { imgSrc: Watch2, title: "Rolex", price: "$100.00" },
  { imgSrc: Watch2, title: "Rolex", price: "$100.00" },
  { imgSrc: Watch2, title: "Rolex", price: "$100.00" },
  { imgSrc: Watch2, title: "Rolex", price: "$100.00" },
  { imgSrc: Watch2, title: "Rolex", price: "$100.00" },
  { imgSrc: Watch2, title: "Rolex", price: "$100.00" },
  { imgSrc: Watch2, title: "Rolex", price: "$100.00" },
  { imgSrc: Watch2, title: "Rolex", price: "$100.00" },
];

export function Card() {
  return (
    <div className="w-full overflow-x-scroll py-2 px-2">
      <div className="flex justify-start gap-4">
        {cardData.map((item, index) => (
          <MaterialCard
            key={index}
            shadow={false}
            className="w-48 flex-shrink-0 bg-primary h-64 rounded-md" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <FaHeart className="absolute right-0 mt-1 w-10 h-4" />
            <CardHeader
              shadow={false}
              floated={false}
              className="h-32 mt-6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="h-full w-full object-cover bg-primary mt-0 mb-0"
              />
            </CardHeader>
            <CardBody className="p-0 h-auto flex flex-col items-center justify-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <Typography color="black" className="font-medium !text-black mt-0 mb-0" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {item.title}
              </Typography>
              <Typography color="blue-gray" className="font-medium mt-0" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {item.price}
              </Typography>
            </CardBody>
            <CardFooter className="p-0 pt-0 flex justify-center relative bottom-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <Button className="w-40 h-12 bg-secondary shadow-none hover:scale-105 focus:scale-105 active:scale-100"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
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
