


const Services = ({ maquetas }) => {
    return (
        <section className="container">
            <div className="proyectos">
                <h3 className="titulo-proyectos">Catálogo comerciales</h3>
            </div>
                <main className="container-maquetas">
                    {maquetas.map((maqueta) => (
                        <div className="route-card" key={maqueta.id}>
                            <img src={maqueta.imagen} alt="maqueta" className="route-img" />

                            <div className="route-info">
                                <p>Nombre: {maqueta.nombre}</p>
                                <p>Precio: {maqueta.precio}</p>
                                <p>Descripción: {maqueta.descripcion}</p>
                            </div>

                            <div className="route-actions">
                                <button className="update-btn">
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    ))}
                </main>
        </section>
    )
}

export default Services