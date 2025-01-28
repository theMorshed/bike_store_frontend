import { useDispatch, useSelector } from 'react-redux';
import { clearCart, selectCartProducts, selectTotalPrice } from '../redux/features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'sonner';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartProducts);
  const totalPrice = useSelector(selectTotalPrice);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    paymentMethod: 'creditCard',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = () => {
    dispatch(clearCart());
    // You can dispatch an action or make an API call to place the order
    toast.success('Order placed successfully!');
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4 py-30">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Customer Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Billing Information</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="Enter your address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cashOnDelivery">Cash on Delivery</option>
              </select>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h3>
          <div className="bg-gray-100 p-4 rounded-lg space-y-4">
            {cartProducts.map(({ product, quantity }) => (
              <div key={product._id} className="flex justify-between">
                <span>{product.name} (x{quantity})</span>
                <span>${(product.price * quantity).toFixed(2)}</span>
              </div>
            ))}
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-2xl text-amber-600">
              <span>Total Price</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={handleOrder}
            className="mt-6 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
