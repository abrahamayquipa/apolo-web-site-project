import pucp from '../assets/images/pucp.webp';
import ulima from '../assets/images/u-lima.webp';
import upacifico from '../assets/images/u-pacifico.webp';
import unmsm from '../assets/images/unmsm.webp';
import upc from '../assets/images/upc.webp';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function InfiniteAutoplayCarousel() {
	return (
		<Swiper
			cssMode={true}
			navigation={true}
			pagination={true}
			modules={[Navigation, Pagination, Mousewheel, Keyboard]}
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
			>
			<SwiperSlide>
				<img src={upacifico} alt="upacifico" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={upc} alt="upc" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={unmsm} alt="unmsm" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={ulima} alt="ulima" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={pucp} alt="pucp" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={upacifico} alt="upacifico" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={upc} alt="upc" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={unmsm} alt="unmsm" />
			</SwiperSlide>
			<SwiperSlide>
				<img src={ulima} alt="ulima" />
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