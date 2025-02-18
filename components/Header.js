import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/providers/CartContext";

function Header() {
    const { cart } = useContext(CartContext);

    return (
        <header className="px-6 py-4 flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg text-white">
            <h1 className="font-extrabold text-2xl tracking-wide">NextJS Store</h1>
            <nav className="flex gap-6">
                <Link href="/" className="hover:text-yellow-300 transition-colors duration-300">Home</Link>
                <Link href="/login" className="hover:text-yellow-300 transition-colors duration-300">Login</Link>
                <Link href="/product" className="hover:text-yellow-300 transition-colors duration-300">Productos</Link>
                <Link href="/admin" className="hover:text-yellow-300 transition-colors duration-300">Admin</Link>
                <Link href="/contacto" className="hover:text-yellow-300 transition-colors duration-300">Contacto</Link>
                <Link href="/carrito" className="relative hover:text-yellow-300 transition-colors duration-300">
                    <ShoppingCart className="w-6 h-6" />
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {cart.length}
                        </span>
                    )}
                </Link>
            </nav>
        </header>
    );
}

export default Header;
