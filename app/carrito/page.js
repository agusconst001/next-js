"use client";
import { useContext } from "react";
import { CartContext } from "@/providers/CartContext";

export default function CarritoPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">El carrito está vacío.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between bg-white p-4 shadow rounded">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>Cantidad: {item.quantity}</p>
                <p className="text-gray-700">${item.price}</p>
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => removeFromCart(item.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
