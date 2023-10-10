import pucp from '../assets/images/pucp.webp';
import ulima from '../assets/images/u-lima.webp';
import upacifico from '../assets/images/u-pacifico.webp';
import unmsm from '../assets/images/unmsm.webp';
import upc from '../assets/images/upc.webp';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';

function InfiniteAutoplayCarousel() {
	return (
		<Swiper 
			slidesPerView={5} 
			spaceBetween={100} 
			loop={true}
			autoplay={{
				delay: 2000,
				disableOnInteraction: false,
			}}
			modules={[Autoplay]}
			breakpoints={{
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
			}}
			data-aos="fade-right">
			<SwiperSlide>
				<img src={upacifico} alt="upacifico" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={ulima} alt="ulima" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={upc} alt="upc" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={unmsm} alt="unmsm" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={pucp} alt="pucp" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={upacifico} alt="upacifico" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={ulima} alt="ulima" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={upc} alt="upc" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={unmsm} alt="unmsm" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={pucp} alt="pucp" />
			</SwiperSlide>
		</Swiper>
	);
}

AOS.init({
    duration: 2000,
})

export default InfiniteAutoplayCarousel;