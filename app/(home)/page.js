async function HomePage() {

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600" style={{ fontFamily: 'Arial, sans-serif' }}>Next JS</h1>
        <p className="text-xl text-gray-700 mt-4" style={{ fontFamily: 'Arial, sans-serif' }}>¡Bienvenido a la aplicación Next.js!</p>
        <p className="text-lg text-gray-500 mt-2" style={{ fontFamily: 'Arial, sans-serif' }}>Este es un ejemplo simple de una página de inicio.</p>
        <p className="text-lg text-gray-500 mt-2" style={{ fontFamily: 'Arial, sans-serif' }}>¡Explora y disfruta de las características de Next.js!</p>
      </div>
    </div>
  );
}

export default HomePage