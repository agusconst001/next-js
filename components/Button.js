function Button(props) {
    return (
        <button className="py-2 px-4 bg-green-600 text-white font-medium text-sm rounded-lg cursor-pointer hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            {props.children}
        </button>
    )
}

export default Button