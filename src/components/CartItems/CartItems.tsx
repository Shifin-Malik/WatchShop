import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react"; // Ensure this is imported
import { useCart } from '../../store/CartContext';

function CartItems() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const handleIncreaseQuantity = (item) => {
    updateQuantity(item, item.quantity + 1);
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item, item.quantity - 1);
    } else {
      handleRemoveFromCart(item); // Remove item if quantity is 1 and decrease is pressed
    }
  };

  const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0);

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
          {cartItems.map((item, index) => (
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
                <Button
                  className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center"
                  onClick={() => handleIncreaseQuantity(item)}
                >
                  +
                </Button>
                <span className="my-2 text-sm font-medium text-gray-800">
                  {item.quantity}
                </span>
                <Button
                  className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center"
                  onClick={() => handleDecreaseQuantity(item)}
                >
                  -
                </Button>
              </div>
              <Button
                className="text-secondary hover:bg-red-100 rounded-full p-1"
                onClick={() => handleRemoveFromCart(item)}
              >
                <MdDelete className="w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="fixed bottom-0 left-0 right-0 z-10 bg-secondary shadow-md w-full h-[13vh] flex items-center justify-between px-8 rounded-t-3xl">
        <div className="text-3xl font-bold mt-2 text-white">${totalAmount.toFixed(2)}</div>
        <Button
          className="text-white bg-indigo-600 h-12 font-bold w-40 flex items-center justify-center rounded-full shadow-lg hover:bg-indigo-500 transition"
        >
          Check Out
        </Button>
      </div>
    </div>
  );
}

export default CartItems;
