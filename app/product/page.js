import PageTitle from "@/components/PageTitle";
import ProductList from "@/components/ProductList";

export default async function ProductPage() {

    const data = await fetch("https://dummyjson.com/products")
    const { products } = await data.json()

    const paragraphStyle = {
        fontSize: "16px",
        color: "#333",
        lineHeight: "1.5",
        margin: "10px 0"
    };

    return (
        <>
            <PageTitle>Productos</PageTitle>
            <p style={paragraphStyle}>Bienvenido a nuestra página de productos. Aquí encontrarás una amplia variedad de artículos disponibles para su compra. Explora nuestra lista de productos a continuación:</p>
            <ProductList productos={products} />
            <p style={paragraphStyle}>Si tienes alguna pregunta, no dudes en contactarnos. ¡Gracias por visitar nuestra tienda!</p>
        </>
    );
}