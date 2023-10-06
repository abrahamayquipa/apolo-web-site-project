import logo from '../assets/images/logo.webp'

function Navbar() {
    return(
        <nav className='navbar'>
                <div className='grid'>
                    <a href="#" className='grid-navbar__logo flexbox-navbar__logo margin-navbar'>
                        <img src={logo} alt="logo" className='navbar__logo__image' />
                        <span className='navbar__logo__text font--bold'>APOLO</span>
                    </a>
                    <ul className='grid-navbar__items flexbox-navbar__items margin-navbar'>
                        <li><a href="#" className='navbar__item font--regular--active'>Inicio</a> </li>
                        <li><a href="#" className='navbar__item font--regular'>Feature</a></li>
                        <li><a href="#" className='navbar__item font--regular nowrap-text'>Who to work</a></li>
                        <li><a href="#" className='navbar__item font--regular'>Pricing</a></li>
                    </ul>
                    <a href="#" className='grid-navbar__button flexbox-navbar__button font--regular--active nowrap-text margin-navbar'>Cotiza ahora</a>
                </div>
            </nav>
    );
}

export default Navbar;