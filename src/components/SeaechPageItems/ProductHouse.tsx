import { Card as MaterialCard, CardHeader } from "@material-tailwind/react";
import Apple from "/images/apple.png";
import Rolex from "/images/rolex.png";
import Titian from "/images/Titian.png";
import Fastrack from "/images/fst.png";
import Hublot from "/images/hublot.png";

function ProductHouse() {
  const cardData = [
    { imgSrc: Apple, title: "Rolex", price: "$100.00" },
    { imgSrc: Fastrack, title: "Rolex", price: "$100.00" },
    { imgSrc: Rolex, title: "Rolex", price: "$100.00" },
    { imgSrc: Titian, title: "Rolex", price: "$100.00" },
    { imgSrc: Hublot, title: "Rolex", price: "$100.00" },
  ];

  return (
    <div className="w-full overflow-x-auto mt-40 px-4">
      <div className="min-w-max flex gap-2">
        {cardData.map((item, index) => (
          <MaterialCard
            key={index}
            shadow={false}
            className="w-20 md:w-32 flex-shrink-0 bg-primary border border-gray-300 shadow-lg ring-4 ring-transparent rounded-lg"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="h-24 md:h-36 mx-0 overflow-hidden rounded-lg"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
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
