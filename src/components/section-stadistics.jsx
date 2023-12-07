import stadistics from '../assets/images/stadistics.webp'

function SectionStadistics() {
    return(
        <article id="" className="u-margin--sides l-grid c-stadistics">
            <img src={stadistics} alt="stadisctics" className="l-section-stadistics__image c-stadistics__image"/>
            <section className="l-section-stadistics__content">
                <span className="u-flexbox-vertical c-stadistics__title">
                    <span className="u-font--semibold-white">Obtén métricas del nivel</span>
                    <span className="u-font--semibold-white">ruido originado</span>
                    <span className="u-font--semibold-white">dentro de tus espacios</span>
                </span>
                <p className="u-font-regular--gray c-stadistics__subtitle">
                Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </section>
        </article>
    );
}

export default SectionStadistics;