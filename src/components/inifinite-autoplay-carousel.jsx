import pucp from '../assets/images/pucp.webp';
import ulima from '../assets/images/u-lima.webp';
import upacifico from '../assets/images/u-pacifico.webp';
import uni from '../assets/images/uni.webp';
import unmsm from '../assets/images/unmsm.webp';
import upc from '../assets/images/upc.webp';

function InfiniteAutoplayCarousel() {
	return (
		<section className="grid-layout">
			<div className="flexbox-layout carousel-layout">
				<img src={upacifico} alt="upacifico" className="carousel__images"/>
				<img src={ulima} alt="ulima" className="carousel__images"/>
				<img src={upc} alt="upc" className="carousel__images"/>
				<img src={unmsm} alt="unmsm" className="carousel__images"/>
				<img src={uni} alt="uni" className="carousel__images"/>
				<img src={pucp} alt="pucp" className="carousel__images"/>
			</div>
			
		</section>
	);
}

export default InfiniteAutoplayCarousel;