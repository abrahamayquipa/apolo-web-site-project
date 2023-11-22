import woman from '../assets/images/woman.webp'

function SectionRecommendations() {
    return(
        <article id="testimonials" className="margin--sides grid-layout margin--section-testimonials">
            <h2 className="section-recommendations-layout__header font--regular-big-bold">Testimonios</h2>
            <span className="section-recommendations-layout__header font--regular-dark-gray">Hacemos uso de sensores de nivel de ruido que facilitan las tareas de monitoreo</span>
            
            <section className="grid-layout section-recommendations-layout__header testimonials margin--content">
                <section className="section-recommendations-layout__image">
                    <img src={woman} alt="woman" className="testimonials__image"/>
                </section>
                <section className="section-recommendations-layout__content flexbox-layout flexbox-vertical">
                    <span className="font--regular-little-bold margin--content">Leslie Alexander</span>
                    <span className="font--regular-light-gray">CEO, Digital PT</span>
                    <p className="font--regular-light-gray margin--content">Nulla facilisi Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit erat. Etiam non erat volutpat, consectetur nunc vitae, posuere diam.<br/>
                    Sed nisl nisi, rhoncus nec orci at, convallis ullamcorper purus. Suspendisse placerat tortor vitae neque iaculis efficitur. Nulla sed consectetur mi, nec tempor lorem. Aenean nec aliquet leo.</p>
                </section>
            </section>
        </article>
    );
}

export default SectionRecommendations;