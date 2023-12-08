import React from 'react';
import { createRoot } from 'react-dom/client';

import Navbar from './components/navbar.jsx'
import MainArticle from './components/main-article.jsx';
import Carousel from './components/inifinite-autoplay-carousel.jsx';
import SectionCards from './components/section-cards.jsx';
import SectionStadistics from './components/section-stadistics.jsx';
import SectionCamera from './components/section-camera.jsx';
import Footer from './components/footer.jsx';

import '../src/styles/sass/base/_reset.scss';

const root = createRoot(document.getElementById('root'));

root.render(
  <>
    <Navbar/>
    <MainArticle/>
    <Carousel/>
    <SectionCards/>
    <SectionStadistics/>
    <SectionCamera/>
    <Footer/>
  </>
);