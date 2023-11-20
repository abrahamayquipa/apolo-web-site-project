import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar.jsx'
import MainArticle from './components/main-article.jsx';
import Carousel from './components/inifinite-autoplay-carousel.jsx';
import SecondaryArticle from './components/secondary-article.jsx';

import '../src/styles/sass/base/_reset.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <body>
      <Navbar/>
      <MainArticle/>
      <Carousel/>
      <SecondaryArticle/>
      <MainArticle/>
      <MainArticle/>
    </body>
  </>
);