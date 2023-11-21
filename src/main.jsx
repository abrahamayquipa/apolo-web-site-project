import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar.jsx'
import MainArticle from './components/main-article.jsx';
import Carousel from './components/inifinite-autoplay-carousel.jsx';
import SectionCards from './components/section-cards.jsx';
import SectionStadistics from './components/section-stadistics.jsx';
import SectionRecommendations from './components/section-recommendations.jsx';
import Footer from './components/footer.jsx';

import '../src/styles/sass/base/_reset.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <body>
      <Navbar/>
      <MainArticle/>
      <Carousel/>
      <SectionCards/>
      <SectionStadistics/>
      <SectionRecommendations/>
      <Footer></Footer>
    </body>
  </>
);