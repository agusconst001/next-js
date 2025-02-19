import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CartProvider } from "@/app/providers/CartContext";  // Importamos el proveedor del carrito
import "./globals.css";

export const metadata = {
  title: "NextJS Store",
  authors: [{ name: "Agustina Rodríguez" }],
  description: "Aplicación de comercio electrónico",
  keywords: "tienda online, desarrollo web, nextjs, react, tailwindcss, ecommerce, tecnología, compras, argentina"
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <CartProvider> {/* Envolvemos la app con el proveedor del carrito */}
          <Header />
          <main className="flex-grow p-6">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

export default RootLayout;

