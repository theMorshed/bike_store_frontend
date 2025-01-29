import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartProducts,
  selectTotalPrice,
  updateQuantity,
  removeProduct,
  clearCart,
  Product,
} from '../redux/features/cart/cartSlice';
import { selectCurrentUser } from '../redux/features/auth/authSlice';
import { useCreateOrderMutation } from '../redux/features/cart/orderApi';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

// Define the CartProduct type
interface CartProduct {
  product: Product;
  quantity: number;
}

const CartPage = () => {
  const dispatch = useDispatch();
  const cartProducts: CartProduct[] = useSelector(selectCartProducts);
  const totalPrice: number = useSelector(selectTotalPrice);
  const [createOrder, { isLoading, isSuccess, data, isError, error }] = useCreateOrderMutation();
  const navigate = useNavigate();

  const user = useSelector(selectCurrentUser);

  const handleRemove = (productId: string) => {
    dispatch(removeProduct(productId));
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ productId, quantity }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handlePlaceOrder = async () => {
    if (user) {
      await createOrder({ user: user?.id, products: cartProducts });
      localStorage.removeItem('cart');
    } else {
      navigate('/login');
    }
  };

  const toastId = "cart";
  useEffect(() => {
    if (isLoading) toast.loading("Processing ...", { id: toastId });

    if (isSuccess) {
      toast.success(data?.message, { id: toastId });
      if (data?.data) {
        setTimeout(() => {
          window.location.href = data.data;
        }, 1000);
      }
    }

    if (isError) toast.error(JSON.stringify(error), { id: toastId });
  }, [data?.data, data?.message, error, isError, isLoading, isSuccess]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartProducts?.length > 0 ? (
        <div>
          {cartProducts?.map(({ product, quantity }) => (
            <div
              key={product._id}
              className="flex justify-between items-center mb-4 border-b pb-4"
            >
              <img src={product.image} alt={product.name} className="w-20 h-20" />
              <div>
                <h4 className="font-bold">{product.name}</h4>
                <p>${product.price}</p>
              </div>
              <div>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) =>
                    handleQuantityChange(product._id, parseInt(e.target.value))
                  }
                  className="w-16 text-center border"
                />
              </div>
              <button
                onClick={() => handleRemove(product._id)}
                className="bg-amber-600 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-amber-600">Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={handleClearCart}
              className="bg-amber-600 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
            <button
              onClick={handlePlaceOrder}
              className="bg-amber-600 text-white px-4 py-2 rounded"
            >
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
};

export default CartPage;