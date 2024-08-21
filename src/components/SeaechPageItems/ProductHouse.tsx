import { Card as MaterialCard, CardHeader } from "@material-tailwind/react";
import Apple from "../../../public/images/apple.png";
import Rolex from "../../../public/images/rolex.png";
import Titian from "../../../public/images/Titian.png";
import Fastrack from "../../../public/images/fst.png";
import Hublot from "../../../public/images/hublot.png";
function ProductHouse() {
  const cardData = [
    {
      imgSrc: Fastrack,
      title: "Rolex",
      price: "$100.00",
    },
   
   
    {
      imgSrc: Fastrack,
      title: "Rolex",
      price: "$100.00",
    },

    {
      imgSrc: Apple,
      title: "Rolex",
      price: "$100.00",
    },
    {
      imgSrc: Fastrack,
      title: "Rolex",
      price: "$100.00",
    },
    {
      imgSrc: Apple,
      title: "Rolex",
      price: "$100.00",
    },

    {
      imgSrc: Rolex,
      title: "Rolex",
      price: "$100.00",
    },
    {
      imgSrc: Titian,
      title: "Rolex",
      price: "$100.00",
    },
    {
      imgSrc: Hublot,
      title: "Rolex",
      price: "$100.00",
    },
   
    {
      imgSrc: Rolex,
      title: "Rolex",
      price: "$100.00",
    },
    {
      imgSrc: Apple,
      title: "Rolex",
      price: "$100.00",
    },
  ];

  return (
    
    <div className="props props-invert w-full   overflow-x-scroll    ml-3 mt-40 ">
      <div className="flex justify-center gap-3  ">
        {cardData.map((item, index) => (
          <MaterialCard
            key={index}
            shadow={false}
            className="w-20 md:w-32  flex-shrink-0 bg-primary   border border-gray-300 shadow-lg ring-4 ring-transparent rounded-lg"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="h-24 md:h-36 mx-0  overflow-y-hidden rounded-lg " // Adjust this if necessary
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              placeholder={undefined}
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="h-auto w-full object-cover rounded-lg mt-2"
              />
            </CardHeader>
          </MaterialCard>
        ))}
      </div>
    </div>
  );
}

export default ProductHouse;
