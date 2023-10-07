import pucp from '../assets/images/pucp.webp';
import ulima from '../assets/images/u-lima.webp';
import upacifico from '../assets/images/u-pacifico.webp';
import uni from '../assets/images/uni.webp';
import unmsm from '../assets/images/unmsm.webp';
import upc from '../assets/images/upc.webp';

function InfiniteAutoplayCarousel() {
	return (
		<section className="slider">
			<div className="slide-track">
				<div className="slide">
					<img src={pucp} height="72" alt="" />
				</div>
				<div className="slide">
					<img src={ulima} height="72" alt="" />
				</div>
				<div className="slide">
					<img src={upacifico} height="72" alt="" />
				</div>
				<div className="slide">
					<img src={uni} height="72" alt="" />
				</div>
				<div className="slide">
					<img src={unmsm} height="72" alt="" />
				</div>
				<div className="slide">
					<img src={upc} height="72" alt="" />
				</div>
			</div>
		</section>
	);
}

export default InfiniteAutoplayCarousel;