function PageTitle({ children = "Titulo de pagina" }) {
    return (
        <h2 className="mb-8 text-4xl font-bold text-secondary">{children}</h2>
    )
}
export default PageTitle