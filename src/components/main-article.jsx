import camera from '../assets/images/security-camera.webp'

function MainArticle() {
    const handleConfettiClick = (e) => {
        e.preventDefault();

        confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.6 }
        });
    };
    
    return(
        <article className="grid-layout margin--sides margin--main-article">
            <section className="main-article-layout__content" data-aos="fade-right">
                <section className="flexbox-layout flexbox-vertical main-article__content margin--content">
                    <span>
                        <span className="main-article__text font--extra-bold">Sistema de </span>
                        <span className="main-article__text main-article__text--gradient font--extra-bold">monitoreo</span>
                    </span>
                    <span className="main-article__text font--extra-bold">para espacios</span>
                    <span>
                        <span className="main-article__text font--extra-bold">en </span>
                        <span className="main-article__text main-article__text--gradient font--extra-bold">universidades</span>
                    </span>
                </section>
                <span className="main-article-layout__content font--regular margin--content">Supervisa optimamente el correcto uso de tus espacios de estudio.</span>
                
                <form action="" className="grid-layout form-layout main-article-layout__content margin--content">
                    <input type="text" placeholder="Ingresa tu correo electrónico" className="form-layout__label form form__label"/>
                    <button id="confettiButton" className="form form__button form-layout__button" onClick={handleConfettiClick}>Enviar</button>
                </form>
            </section>
            <figure className="main-article-layout__image" data-aos="fade-left">
                <img src={camera} alt="camera" className="main-article__image"/>
            </figure>
        </article>
    );
}

AOS.init({
    duration: 2000,
})

export default MainArticle;