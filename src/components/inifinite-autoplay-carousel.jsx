import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import React, { useEffect } from 'react';

import pucp from '../assets/images/pucp.webp';
import ulima from '../assets/images/u-lima.webp';
import upacifico from '../assets/images/u-pacifico.webp';
import unmsm from '../assets/images/unmsm.webp';
import upc from '../assets/images/upc.webp';

import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function InfiniteAutoplayCarousel() {
	useEffect(() => {
		const swiper = new Swiper('.swiper', {
			modules: [Navigation, Pagination],
			direction: 'horizontal',
			loop: true,
			allowTouchMove: true,
			pagination: {
			el: '.swiper-pagination',
			clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				200: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				350: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				600: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				1000: {
					slidesPerView: 4,
					spaceBetween: 40,
				},
				1500: {
					slidesPerView: 5,
					spaceBetween: 40,
				},
			},
		});
		return () => {
			swiper.destroy();
		};
	}, []);
	
	return (
		<div className="swiper" data-aos="fade-right">
			<div className="swiper-wrapper">
				<div className="swiper-slide">
					<img src={upacifico} alt="upacifico" />
				</div>
				<div className="swiper-slide">
					<img src={upc} alt="upc" />
				</div>
				<div className="swiper-slide">
					<img src={unmsm} alt="unmsm" />
				</div>
				<div className="swiper-slide">
					<img src={ulima} alt="ulima" />
				</div>
				<div className="swiper-slide">
					<img src={pucp} alt="pucp" />
				</div>
				<div className="swiper-slide">
					<img src={upacifico} alt="upacifico" />
				</div>
				<div className="swiper-slide">
					<img src={upc} alt="upc" />
				</div>
				<div className="swiper-slide">
					<img src={unmsm} alt="unmsm" />
				</div>
				<div className="swiper-slide">
					<img src={ulima} alt="ulima" />
				</div>
				<div className="swiper-slide">
					<img src={pucp} alt="pucp" />
				</div>
			</div>
			<div className="swiper-pagination"></div>
			<div className="swiper-button-prev"></div>
			<div className="swiper-button-next"></div>
		</div>
	);
}

export default InfiniteAutoplayCarousel;