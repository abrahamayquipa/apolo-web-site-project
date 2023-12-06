import Card from './card'

function SectionCards() {
    return(
        <article id="" className="u-margin--sides l-grid">
            <section className="l-section-cards__content c-section-cards u-flexbox-vertical">
                <h2 className="u-font--semibold-white">¿Cómo funciona?</h2>
                <span className="u-font-regular--white">Hacemos uso de sensores de nivel de ruido que facilitan las tareas de monitoreo</span>
            </section>
            <section className="l-section-cards__cards">
                <Card 
                    title="1. Sensores de nivel de ruido" 
                    text="Using basic skills you can improve your business stuff with Around Using basic skills"/>
                <Card 
                    title="2. Contadores automaticos de aforo" 
                    text="Using basic skills you can improve your business stuff with Around Using basic skills"/>
                <Card 
                    title="3. Controles remotos" 
                    text="Using basic skills you can improve your business stuff with Around Using basic skills"/>
                <Card 
                    title="4. Controles remotos" 
                    text="Using basic skills you can improve your business stuff with Around Using basic skills"/>
            </section>
        </article>
    );
}

export default SectionCards;