import { useContext } from "react";
import { StoreContext } from "../components/Context";

export default function CartUI() {
  const { cart, removeitem, qtyhandler } = useContext(StoreContext);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-semibold mb-6">
        Shopping Cart
      </h1>

      <div className="space-y-4">
        {cart.map((prod) => (
          <div
            key={prod.id}
            className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white p-4 rounded-lg shadow"
          >
            {/* Image */}
            <img
              src={prod.thumbnail}
              alt={prod.title}
              className="w-full sm:w-20 h-48 sm:h-20 rounded object-cover"
            />

            {/* Product Info */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="font-medium text-lg">{prod.title}</h2>
              <p className="text-gray-500">
                ${prod.price * prod.qty}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex justify-center sm:justify-start items-center border rounded">
              <button
                onClick={() => qtyhandler(prod.id, "dec")}
                className="px-3 py-1 text-lg hover:bg-gray-100"
              >
                −
              </button>
              <span className="px-4 py-1">{prod.qty}</span>
              <button
                onClick={() => qtyhandler(prod.id, "inc")}
                className="px-3 py-1 text-lg hover:bg-gray-100"
              >
                +
              </button>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeitem(prod.id)}
              className="text-red-500 hover:text-red-600 text-sm text-center sm:text-left"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="flex justify-center sm:justify-end mt-6">
        <div className="bg-gray-100 p-4 rounded-lg w-full sm:w-64">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
