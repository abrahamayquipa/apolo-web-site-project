import React from 'react';
import ReactDOM from 'react-dom';

import '../src/styles/sass/base/_reset.scss';

import logo from './assets/images/logo.webp'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <div className='background'>

      <nav className='navbar py-3'>
        <div className='container row-cols-12 d-flex flex-row'>

          <a href="#" className='col-2 d-flex justify-content-center align-items-center'>
            <img src={logo} alt="logo" className='navbar__logo'/> 
            <span className='text-end align-self-end font--extra-bold navbar__logo--font'>APOLO</span>
          </a>

          <ul className='nav col-4 d-flex justify-content-between align-items-center'>
            <li className=''>
              <a href="#" className='font--regular--active'>Inicio</a>
            </li>
            <li className=''>
              <a href="#" className='font--regular'>Feature</a>
            </li>
            <li className=''>
              <a href="#" className='text-nowrap font--regular'>Who to work</a>
            </li>
            <li className=''>
              <a href="#" className='font--regular'>Pricing</a>
            </li>
          </ul>

          <a href="#" className='col-2 d-flex justify-content-center text-nowrap font--regular--active'>Cotiza ahora mismo</a>

        </div>
      </nav>

    </div>
  </>
);