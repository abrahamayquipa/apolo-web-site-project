import logo from '../assets/images/logo.webp'

function Navbar() {
    return(
        <nav className="navbar">
            <div className="margin--sides grid-layout">

                <a href="#" className="flexbox-layout navbar-layout__logo">
                    <img src={logo} alt="logo" className="navbar__logo-image" />
                    <span className="font--big-bold navbar__logo-text">APOLO</span>
                </a>
                <ul className="flexbox-layout navbar-layout__items">
                    <li><a href="#" className="navbar__items font--active">Inicio</a> </li>
                    <li><a href="#cards" className="navbar__items font--regular-dark-gray nowrap-text">¿Como funciona?</a></li>
                    <li><a href="#stadistics" className="navbar__items font--regular-dark-gray">Metricas</a></li>
                    <li><a href="#testimonials" className="navbar__items font--regular-dark-gray">Testimonios</a></li>
                </ul>
                <a href="#" className="flexbox-layout navbar-layout__button font--active">Cotiza ahora</a>
            </div>
        </nav>
    );
}

export default Navbar;