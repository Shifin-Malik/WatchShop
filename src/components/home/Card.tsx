
import { Card as MaterialCard, CardHeader, CardBody, CardFooter, Button, Typography } from "@material-tailwind/react";
import Watch2 from '../../../public/images/watch2.png'
// Sample data array
const cardData = [


  {
    imgSrc:  Watch2,
    title: "Rolex",
    price: "$100.00",
   
  },
  {
    imgSrc:  Watch2,
    title: "Rolex",
    price: "$100.00",
   
  },
  {
    imgSrc: Watch2,
    title: "Rolex",
    price: "$100.00",
   
  },
  {
    imgSrc:  Watch2,
    title: "Rolex",
    price: "$100.00",
   
  },
  {
    imgSrc:  Watch2,
    title: "Rolex",
    price: "$100.00",
   
  },
  {
    imgSrc:  Watch2,
    title: "Rolex",
    price: "$100.00",
   
  },
  {
    imgSrc:  Watch2,
    title: "Rolex",
    price: "$100.00",
   
  },
  {
    imgSrc:  Watch2,
    title: "Rolex",
    price: "$100.00",
   
  },
  {
    imgSrc:  Watch2,
    title: "Rolex",
    price: "$100.00",
   
  },
  // Add more items as needed
];

export function Card() {
  return (
    <div className="props props-invert w-full overflow-x-scroll  ml-3">
      <div className="flex justify-center gap-4">
        {cardData.map((item, index) => (
       <MaterialCard
       key={index}
       shadow={false}
       className="w-52 flex-shrink-0 bg-primary h-auto rounded-md"
       placeholder={undefined}
       onPointerEnterCapture={undefined}
       onPointerLeaveCapture={undefined}
     >
        
        <CardHeader
  shadow={false}
  floated={false}
  className="h-48"
  placeholder={undefined}
  onPointerEnterCapture={undefined}
  onPointerLeaveCapture={undefined}
>
              <img
                src={item.imgSrc}
                alt={item.title}
                className="h-full w-full object-cover mt-0 bg-primary"
              />
            </CardHeader>
            <CardBody
  className="h-auto flex flex-col"
  placeholder={undefined}
  onPointerEnterCapture={undefined}
  onPointerLeaveCapture={undefined}
  onTransitionEndCapture={undefined}
>
              <div className="flex flex-col items-center mt-[-40px] justify-center ">
              <Typography
  color="black"
  className="font-medium text-secondary"
  placeholder={undefined}
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}}
>
                  {item.title}
                </Typography>
                <Typography
  color="blue-gray"
  className="font-medium justify-center mt-0"
  placeholder={undefined}
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}}
>
                  {item.price}
                </Typography>
              </div>
          
            </CardBody>
            <CardFooter
  className="pt-0 flex justify-center relative bottom-4"
  placeholder={undefined}
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}}
  divider={false} // if applicable
><Button
  className="w-40  h-12 bg-secondary shadow-none hover:scale-105 focus:scale-105 active:scale-100"
  ripple={false}
  fullWidth={true}
  onClick={() => {}}
  onPointerEnterCapture={() => {}}
  onPointerLeaveCapture={() => {}}
  placeholder={undefined} // if not needed
  loading={false} // if applicable
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