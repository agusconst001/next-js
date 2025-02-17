"use client"; // Esto indica que es un Client Component

export default function AddToCartButton({ product }) {
  const handleAddToCart = () => {
    alert(`Producto agregado: ${product.title}`);
  };

  return (
    <button onClick={handleAddToCart} style={{ padding: "10px", background: "blue", color: "white" }}>
      Agregar al carrito
    </button>
  );
}
