import ProductList from "@/components/ProductList";

export default async function CategoryPage({ params }) {
    const { category } = params;

    // Obtener todos los productos desde DummyJSON
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    // Filtrar los productos por categoría
    const filteredProducts = data.products.filter(product =>
        product.category.toLowerCase().trim() === category.toLowerCase().trim()
    );

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Productos en {category}</h1>
            
            {filteredProducts.length > 0 ? (
                <ProductList productos={filteredProducts} />
            ) : (
                <p>No hay productos en esta categoría.</p>
            )}
        </div>
    );
}
