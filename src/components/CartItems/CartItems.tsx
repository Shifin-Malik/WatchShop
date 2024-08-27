import { FaArrowLeft } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Watch2 from '../../../public/images/watch2.png';
import { Button } from "@material-tailwind/react";

const cardData = [
  { imgSrc: Watch2, title: 'Nike Air Max 200', price: '$240.00', quantity: 1 },
  { imgSrc: Watch2, title: 'Excee Sneakers', price: '$260.00', quantity: 1 },
  { imgSrc: Watch2, title: 'Air Max Motion 2', price: '$290.00', quantity: 1 },
  { imgSrc: Watch2, title: 'Nike Air Max 200', price: '$240.00', quantity: 1 },
  { imgSrc: Watch2, title: 'Excee Sneakers', price: '$260.00', quantity: 1 },
  { imgSrc: Watch2, title: 'Air Max Motion 2', price: '$290.00', quantity: 1 },
  // Add more items as needed
];

function CartItems() {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center w-full px-4 py-4 bg-white shadow-md">
        <Link to="/">
          <FaArrowLeft className="w-6 h-6 text-gray-800" />
        </Link>
        <h2 className="text-lg font-bold text-gray-800">My Cart</h2>
        <MdDelete className="w-6 h-6 text-gray-800" />
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto mt-16 mb-20">
        <div className="flex flex-col w-[44vh] max-w-md mx-auto mt-3 space-y-2">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-base font-medium text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.price}</p>
              </div>
              <div className="flex flex-col items-center">
                <button className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                  +
                </button>
                <span className="my-2 text-sm font-medium text-gray-800">
                  {item.quantity}
                </span>
                <button className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="fixed bottom-0 left-0 right-0 z-10 bg-secondary shadow-md w-full h-[13vh] flex items-center justify-between px-8 rounded-t-3xl">
        {/* Subtotal and Taxes */}
           
          
          <div className="text-3xl font-bold mt-2 text-white">$1290.00</div>
     

        {/* Checkout Button */}
        <Button
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="text-white bg-indigo-600 h-12 font-bold w-40 flex items-center justify-center rounded-full shadow-lg hover:bg-indigo-500 transition"
        >
          Check Out
        </Button>
      </div>
    </div>
  );
}

export default CartItems;
