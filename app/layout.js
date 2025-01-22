import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";


export const metadata = {
  title: "NextJS Store",
  authors: [{ name: "agustina rodriguez" }],
  description: "Aplicacion de comercio electrónico",
  keywords: "tienda online, desarrollo web, nextjs, react, tailwindcss, ecommerce, tecnología, compras, argentina"
}

function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout