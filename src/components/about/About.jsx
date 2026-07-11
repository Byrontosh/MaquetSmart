import School1 from '../../assets/Escuela1.webp';
import School2 from '../../assets/Escuela2.webp';
import School3 from '../../assets/Escuela3.webp';
import School7 from '../../assets/Escuela7.webp';

const About = () => {
    return (
        <>
            <section className="container text-center" id="nosotros">
                <div className="servicios">
                    <h2 className="titulo-servicios">Recomendados por</h2>
                    <div className="linea" />
                </div>
            </section>
            <main className="container">
                <div className="contenedor-escuelas">
                    <img src={School1} alt="School 1" />
                    <img src={School2} alt="School 2" />
                    <img src={School3} alt="School 3" />
                    <img src={School7} alt="School 7" />
                </div>
            </main>
        </>
    )
}

export default About