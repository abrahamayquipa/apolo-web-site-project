import woman from '../assets/images/woman.webp'

function SectionRecommendations() {
    return(
        <article>
            <section>
                <figure>
                    <img src={woman} alt="woman" />
                </figure>
            </section>
            <section>
                <span>Leslie Alexander</span>
                <span>CEO, Digital PT</span>
                <p>Nulla facilisi Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit erat. Etiam non erat volutpat, consectetur nunc vitae, posuere diam.<br/>
                Sed nisl nisi, rhoncus nec orci at, convallis ullamcorper purus. Suspendisse placerat tortor vitae neque iaculis efficitur. Nulla sed consectetur mi, nec tempor lorem. Aenean nec aliquet leo.</p>
            </section>
        </article>
    );
}

export default SectionRecommendations;