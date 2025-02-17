import PageTitle from "@/components/PageTitle";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton"; // Importa el botón interactivo
//DETALLE DE PRODUCTO
export default async function ProductDetailsPage({ params }) {
  const { id } = params;

  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`, { cache: "no-store" });
    const productDetail = await res.json();

    if (!productDetail.id) {
      return (
        <>
          <PageTitle>Producto no encontrado</PageTitle>
          <p>El producto con id {id} no existe, por favor inténtalo de nuevo.</p>
          <Link href="/product">Volver a productos</Link>
        </>
      );
    }

    return (
      <>
        <PageTitle>Detalle del producto {productDetail.title}</PageTitle>
        <p>Precio: ${productDetail.price}</p>
        <p>Descripción: {productDetail.description}</p>
        <img src={productDetail.thumbnail} alt={productDetail.title} />
        
        {/* Botón interactivo */}
        <AddToCartButton product={productDetail} />
      </>
    );
  } catch (error) {
    return (
      <>
        <PageTitle>Error al cargar el producto</PageTitle>
        <p>Hubo un problema al obtener los datos.</p>
        <Link href="/product">Volver a productos</Link>
      </>
    );
  }
}
