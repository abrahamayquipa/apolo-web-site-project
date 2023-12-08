import camera from '../assets/images/screen-tablet.webp'

function SectionCamera() {
    return(
        <article id="banner" className="u-margin--sides l-grid c-camera" data-aos="fade-right">
            <section className="l-section-cameras__content c-camera__content">
                <section className="u-flexbox-vertical u-margin--card-camera">
                    <span className="u-font--semibold-white">
                        El mejor sistema
                    </span>
                    <span  className="u-font--semibold-white">
                        de monitoreo para universidades
                    </span>
                    <span className="u-font--semibold-white">
                        con camaras integradas
                    </span>
                </section>
                <p className="u-font-regular--white">
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                </p>
            </section>
            <img src={camera} alt="camera" className="l-section-cameras__image c-camera__image"/>
        </article>
    );
}

export default SectionCamera;