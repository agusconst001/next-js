import React from 'react';

const Formulario = () => {
    return (
        <div className="max-w-lg mx-auto bg-gray-50 p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Formulario</h2>
            <form>
                <div className="mb-6">
                    <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-8">
                    <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="message">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        className="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="5"
                    ></textarea>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Formulario;