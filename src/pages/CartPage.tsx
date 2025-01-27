import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import for v6

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const CartPage = () => {
  const navigate = useNavigate(); // Updated to useNavigate
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Mountain Bike', price: 500, quantity: 1 },
    { id: 2, name: 'Road Bike', price: 700, quantity: 2 },
    { id: 3, name: 'Bike Helmet', price: 50, quantity: 1 },
  ]);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    navigate('/checkout'); // Updated to use navigate
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Your Cart</h1>

      <div className="flex flex-col space-y-6">
        {/* Cart Items */}
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-4 mb-4">
              <div>
                <p className="text-xl font-medium">{item.name}</p>
                <p className="text-gray-600">Price: ${item.price}</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                  className="w-12 text-center border border-gray-300 rounded"
                  min="1"
                />
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl text-center text-gray-700">Your cart is empty.</p>
        )}

        {/* Total */}
        <div className="flex justify-between text-xl font-semibold mt-4">
          <p>Total</p>
          <p>${calculateTotal().toFixed(2)}</p>
        </div>

        {/* Checkout Button */}
        <div className="mt-6">
          <button
            onClick={handleCheckout}
            className="w-full px-6 py-3 bg-blue-600 text-white text-xl font-semibold rounded"
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
