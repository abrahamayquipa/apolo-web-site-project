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
        <article className="">
            <section className="">
                <section className="">
                    <span>
                        <span className="">Sistema de </span>
                        <span className="">monitoreo</span>
                    </span>
                    <span className="">para espacios</span>
                    <span>
                        <span className="">en </span>
                        <span className="">universidades</span>
                    </span>
                </section>
                <span className="">Supervisa optimamente el correcto uso de tus espacios de estudio.</span>
                
                <form action="" className="">
                    <input type="text" placeholder="Ingresa tu correo electrónico" className=""/>
                    <button className="" onClick={handleConfettiClick}>
                        Enviar
                    </button>
                </form>
            </section>
            <figure className="">
                <img src={camera} alt="camera" className=""/>
            </figure>
        </article>
    );
}

AOS.init({
    duration: 2000,
})

export default MainArticle;