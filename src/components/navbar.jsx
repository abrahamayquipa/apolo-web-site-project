import logo from '../assets/images/logo.webp'

function Navbar() {
    return(
        <nav className="navbar">
                <div className="grid-layout">
                    <a href="#" className="flexbox-layout navbar-layout__logo navbar__logo margin--navbar">
                        <img src={logo} alt="logo" className="navbar__logo-image" />
                        <span className="navbar__logo-text font--bold">APOLO</span>
                    </a>
                    <ul className="flexbox-layout navbar-layout__items navbar__items flexbox-navbar__items margin--navbar">
                        <li><a href="#" className="navbar__items font--active">Inicio</a> </li>
                        <li><a href="#" className="navbar__items font--regular">Feature</a></li>
                        <li><a href="#" className="navbar__items font--regular nowrap-text">Who to work</a></li>
                        <li><a href="#" className="navbar__items font--regular">Pricing</a></li>
                    </ul>
                    <a href="#" className="flexbox-layout navbar-layout__button navbar__button font--active nowrap-text margin--navbar">Cotiza ahora</a>
                </div>
            </nav>
    );
}

export default Navbar;