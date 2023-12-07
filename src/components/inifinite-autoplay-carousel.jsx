import pucp from '../assets/images/pucp.webp';
import ulima from '../assets/images/u-lima.webp';
import upacifico from '../assets/images/u-pacifico.webp';
import unmsm from '../assets/images/unmsm.webp';
import upc from '../assets/images/upc.webp';

import { useEffect } from 'react';
import { register } from 'swiper/element/bundle';
register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function InfiniteAutoplayCarousel() {
	useEffect(() => {
		const swiper = document.querySelector('swiper-container');
		swiper.breakpoints = {
			200: {
				slidesPerView: 1,
				spaceBetween: 20,
				loop: false,
			},
			350: {
				slidesPerView: 2,
				spaceBetween: 20,
				loop: false,
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
		}
		swiper.initialize();
	}, []);
	return (
		<swiper-container
		navigation="true"
		pagination="true"
		pagination-clickable="true"
		loop="true"
		>
			<swiper-slide>
				<img src={upacifico} alt="upacifico" />
			</swiper-slide>
			<swiper-slide>
				<img src={upc} alt="upc" />
			</swiper-slide>
			<swiper-slide>
				<img src={unmsm} alt="unmsm" />
			</swiper-slide>
			<swiper-slide>
				<img src={ulima} alt="ulima" />
			</swiper-slide>
			<swiper-slide>
				<img src={pucp} alt="pucp" />
			</swiper-slide>
			<swiper-slide>
				<img src={upacifico} alt="upacifico" />
			</swiper-slide>
			<swiper-slide>
				<img src={upc} alt="upc" />
			</swiper-slide>
			<swiper-slide>
				<img src={unmsm} alt="unmsm" />
			</swiper-slide>
			<swiper-slide>
				<img src={ulima} alt="ulima" />
			</swiper-slide>
			<swiper-slide>
				<img src={pucp} alt="pucp" />
			</swiper-slide>
		</swiper-container>
	);
}

export default InfiniteAutoplayCarousel;