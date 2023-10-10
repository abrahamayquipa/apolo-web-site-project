import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar.jsx'
import Article from './components/article.jsx';
import Carousel from './components/inifinite-autoplay-carousel.jsx';

import '../src/styles/sass/base/_reset.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <header>
      <Navbar/>
      <Article/>
      <Carousel/>
    </header>
  </>
);