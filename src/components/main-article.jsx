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
        <article className="margin--sides margin--main-article grid-layout">
            <section className="main-article-layout__content">
                <section className="flexbox-layout flexbox-vertical">
                    <span>
                        <span className="font--big-bold main-article__text">Sistema de </span>
                        <span className="font--big-bold main-article__text main-article__text--gradient">monitoreo</span>
                    </span>
                    <span className="font--big-bold main-article__text">para espacios</span>
                    <span>
                        <span className="font--big-bold main-article__text">en </span>
                        <span className="font--big-bold main-article__text main-article__text--gradient">universidades</span>
                    </span>
                </section>
                <span className="font--regular-dark-gray">Supervisa optimamente el correcto uso de tus espacios de estudio.</span>
                
                <form action="" className="grid-layout form-layout">
                    <input type="text" placeholder="Ingresa tu correo electrónico" className="form-layout__label form form__label"/>
                    <button id="confettiButton" className="form-layout__button form form__button" onClick={handleConfettiClick}>
                        Enviar
                    </button>
                </form>
            </section>
            <figure className="main-article-layout__image">
                <img src={camera} alt="camera" className="main-article__image"/>
            </figure>
        </article>
    );
}

AOS.init({
    duration: 2000,
})

export default MainArticle;