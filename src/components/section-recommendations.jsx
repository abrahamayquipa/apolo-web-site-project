import woman from '../assets/images/woman.webp'

function SectionRecommendations() {
    return(
        <article id="" className="">
            <h2 className="">Testimonios</h2>
            <span className="">Hacemos uso de sensores de nivel de ruido que facilitan las tareas de monitoreo</span>
            <section className="">
                <section className="">
                    <img src={woman} alt="woman" className=""/>
                </section>
                <section className="">
                    <span className="">Leslie Alexander</span>
                    <span className="">CEO, Digital PT</span>
                    <p className="">
                        Nulla facilisi Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit erat. Etiam non erat volutpat, consectetur nunc vitae, posuere diam.<br/>
                        Sed nisl nisi, rhoncus nec orci at, convallis ullamcorper purus. Suspendisse placerat tortor vitae neque iaculis efficitur. Nulla sed consectetur mi, nec tempor lorem. Aenean nec aliquet leo.</p>
                </section>
            </section>
        </article>
    );
}

export default SectionRecommendations;