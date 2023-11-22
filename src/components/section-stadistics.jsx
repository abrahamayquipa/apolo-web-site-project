import stadistics from '../assets/images/stadistics.webp'

function SectionStadistics() {
    return(
        <article id="stadistics" className="margin--sides grid-layout">
            <section className="section-stadistics-layout__image">
                <img src={stadistics} alt="stadisctics" className="stadistics__image"/>
            </section>
            <section className="section-stadistics-layout__content">
                <span className="flexbox-layout flexbox-vertical margin--content">
                    <span className="font--regular-big-bold">Obtén métricas del nivel</span>
                    <span className="font--regular-big-bold">ruido originado</span>
                    <span className="font--regular-big-bold">dentro de tus espacios</span>
                </span>
                <p className="font--regular-dark-gray">Using basic skills you can improve your business stuff with Around Using basic skills you can improve your business stuff with Around Using basic skills</p>
            </section>
        </article>
    );
}

export default SectionStadistics;