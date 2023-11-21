import Card from './card'

function SectionCards() {
    return(
        <article className="margin--sides section-layout">
            <section className="grid-layout">
                <h2 className="section-layout__content font--regular-big-bold">¿Cómo funciona?</h2>
                <span className="section-layout__content font--regular-dark-gray">Hacemos uso de sensores de nivel de ruido que facilitan las tareas de monitoreo</span>
            </section>
            <section className="grid-layout">
                <div className="section-layout__cards flexbox-layout">
                    <Card title="1. Sensores de nivel de ruido" text="Using basic skills you can improve your business stuff with Around Using basic skills"/>
                    <Card title="2. Contadores automaticos de aforo" text="Using basic skills you can improve your business stuff with Around Using basic skills"/>
                    <Card title="3. Controles remotos" text="Using basic skills you can improve your business stuff with Around Using basic skills"/>
                    <Card title="4. Controles remotos" text="Using basic skills you can improve your business stuff with Around Using basic skills"/>
                </div>
            </section>
        </article>
    );
}

export default SectionCards;