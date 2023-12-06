import stadistics from '../assets/images/stadistics.webp'

function SectionStadistics() {
    return(
        <article id="" className="u-margin--sides l-grid c-stadistics">
            <section className="l-section-stadistics__image">
                <img src={stadistics} alt="stadisctics" className="c-stadistics__image"/>
            </section>
            <section className="l-section-stadistics__content">
                <span className="u-flexbox-vertical c-stadistics__title">
                    <span className="u-font--semibold-white">Obtén métricas del nivel</span>
                    <span className="u-font--semibold-white">ruido originado</span>
                    <span className="u-font--semibold-white">dentro de tus espacios</span>
                </span>
                <p className="u-font-regular--gray c-stadistics__subtitle">
                    Using basic skills you can improve your business stuff with Around Using basic skills you can improve your business stuff with Around Using basic skills
                </p>
            </section>
        </article>
    );
}

export default SectionStadistics;