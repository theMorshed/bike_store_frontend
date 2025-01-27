import React, { useState } from 'react';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Mountain Bike', price: 500, quantity: 1 },
    { id: 2, name: 'Road Bike', price: 700, quantity: 2 },
    { id: 3, name: 'Bike Helmet', price: 50, quantity: 1 },
  ]);
  console.log(setCartItems);
  
  const [discountCode, setDiscountCode] = useState<string>('');
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountCode(e.target.value);
  };

  const applyDiscount = () => {
    if (discountCode === 'BIKE10') {
      setDiscountApplied(true);
    } else {
      alert('Invalid discount code');
    }
  };

  const removeDiscount = () => {
    setDiscountApplied(false);
    setDiscountCode('');
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const discount = discountApplied ? subtotal * 0.1 : 0;
    return subtotal - discount;
  };

  const handleCheckout = () => {
    alert('Checkout successful! Thank you for your purchase.');
    // Here you would normally integrate with a payment gateway.
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Checkout</h1>

      <div className="flex flex-col space-y-6">
        {/* Cart Items */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <div>
                <p className="text-xl font-medium">{item.name}</p>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <div>
                <p className="text-xl font-medium">${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Discount Code */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={discountCode}
            onChange={handleDiscountChange}
            placeholder="Enter discount code"
            className="p-2 border border-gray-300 rounded"
          />
          {!discountApplied ? (
            <button
              onClick={applyDiscount}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Apply Discount
            </button>
          ) : (
            <button
              onClick={removeDiscount}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Remove Discount
            </button>
          )}
        </div>

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
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
