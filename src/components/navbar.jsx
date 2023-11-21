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
                    <li><a href="#" className="navbar__items font--regular-dark-gray">Feature</a></li>
                    <li><a href="#" className="navbar__items font--regular-dark-gray nowrap-text">Who to work</a></li>
                    <li><a href="#" className="navbar__items font--regular-dark-gray">Pricing</a></li>
                </ul>
                <a href="#" className="flexbox-layout navbar-layout__button font--active">Cotiza ahora</a>
            </div>
        </nav>
    );
}

export default Navbar;