function Footer() {
    return (
        <footer className="bg-slate-950 text-white p-6 text-sm text-center">
            <div className="container mx-auto">
                <p className="mb-2">&copy; 2025 Todos los derechos reservados</p>
                <p className="font-bold">NextJS Store</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="hover:text-gray-400">Facebook</a>
                    <a href="#" className="hover:text-gray-400">Twitter</a>
                    <a href="#" className="hover:text-gray-400">Instagram</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer