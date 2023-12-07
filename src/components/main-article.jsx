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
        <article className="u-margin--sides l-grid c-main-article">
            <section className="l-main-article__content u-flexbox-vertical">
                <span className="u-flexbox-vertical">
                    <span className="c-main-article__text u-font--black-white u-margin--text-main-article">
                        Sistema de 
                    </span> 
                    <span className="c-main-article__text c-main-article__text--gradient u-font--black-white">
                        monitoreo
                    </span>
                    <span className="c-main-article__text u-font--black-white">
                    para espacios
                    </span>
                    <span>
                        <span className="c-main-article__text u-font--black-white u-margin--text-main-article">
                            en
                        </span>
                        <span className="c-main-article__text u-font--black-white c-main-article__text--gradient ">
                            universidades
                        </span>
                    </span>
                    <span className="u-font-regular--gray">
                        Supervisa optimamente el correcto uso de tus espacios de estudio.
                    </span>
                </span>
                <form action="" className="l-grid">
                    <input type="text" placeholder="Ingresa tu correo electrónico" className="l-form__label c-form c-form__label"/>
                    <button className="l-form__button c-form c-form__button" onClick={handleConfettiClick}>
                        Enviar
                    </button>
                </form>
            </section>
            <figure className="l-main-article__image">
                <img src={camera} alt="camera" className="l-main-article__image c-main-article__image"/>
            </figure>
        </article>
    );
}

AOS.init({
    duration: 2000,
})

export default MainArticle;