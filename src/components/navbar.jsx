import logo from '../assets/images/logo.webp'

function Navbar() {
    return(
        <nav className="c-navbar">
            <div className="u-margin--sides l-grid">
                <a href="#" className="l-navbar__logo">
                    <img src={logo} alt="logo" className="c-navbar__logo-image"/>
                    <span className="c-navbar__logo-text u-font--black">APOLO</span>
                </a>
                <ul className="l-navbar__items l-flexbox">
                    <li>
                        <a href="#" className="c-navbar__items u-font-regular-white">
                            Inicio
                        </a> 
                    </li>
                    <li>
                        <a href="#" className="c-navbar__items u-font-regular-gray">
                            ¿Como funciona?
                        </a>
                    </li>
                    <li>
                        <a href="#" className="c-navbar__items u-font-regular-gray">
                            Metricas
                        </a>
                    </li>
                    <li>
                        <a href="#" className="c-navbar__items u-font-regular-gray">
                            Testimonios
                        </a>
                    </li>
                </ul>
                <a href="#" className="l-navbar__button u-font-regular-white">
                    Cotiza ahora
                </a>
            </div>
        </nav>
    );
}

export default Navbar;