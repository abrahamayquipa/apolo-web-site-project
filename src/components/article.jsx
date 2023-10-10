import camera from '../assets/images/security-camera.webp'

function Article() {
    const handleConfettiClick = (e) => {
        e.preventDefault();

        confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.6 }
        });
    };
    
    return(
        <article className="grid-layout margin--extremes">
            <section className="article-layout__content" data-aos="fade-right">
                <section className="flexbox-layout flexbox-vertical article__content margin--content">
                    <span>
                        <span className="article__text font--extra-bold">Sistema de </span>
                        <span className="article__text article__text--gradient font--extra-bold">monitoreo</span>
                    </span>
                    <span className="article__text font--extra-bold">para espacios</span>
                    <span>
                        <span className="article__text font--extra-bold">en </span>
                        <span className="article__text article__text--gradient font--extra-bold">universidades</span>
                    </span>
                </section>
                <span className="article__content font--regular margin--content">Supervisa optimamente el correcto uso de tus espacios de estudio.</span>
                <form action="" className="form-layout article__content margin--content">
                    <input type="text" placeholder="Ingresa tu correo electrónico" className="form-layout__label form form__label"/>
                    <button id="confettiButton" className="form-layout__button form form__button" onClick={handleConfettiClick}>Enviar</button>
                </form>
            </section>
            <figure className="article-layout__image" data-aos="fade-left">
                <img src={camera} alt="camera" className="article__image"/>
            </figure>
        </article>
    );
}

AOS.init({
    duration: 2000,
})

export default Article;