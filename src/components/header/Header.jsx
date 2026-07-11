import { NavLink } from "react-router"

const Header = () => {
    return (
        <header className="container__menu">
            <h1>Maquet<span className="container__site">Smart</span></h1>
            <nav className="container__nav">
                <a href="#nosotros">Nosotros</a>
                <a href="#">Galería</a>
                <a href="#">Planes</a>
                <a href="#">Preguntas Frecuentes</a>
                <a href="#">Proforma</a>
                <a href="#nosotros3">Contacto</a>
            </nav>
            <nav>
                <NavLink to="/login" className="button header__button-login">Ingresar</NavLink>
            </nav>
        </header>
    )
}

export default Header