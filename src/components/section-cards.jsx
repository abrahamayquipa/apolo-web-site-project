import Card from './card'

function SectionCards() {
    return(
        <article id="" className="">
            <section className="">
                <h2 className="">¿Cómo funciona?</h2>
                <span className="">Hacemos uso de sensores de nivel de ruido que facilitan las tareas de monitoreo</span>
            </section>
            <section className="">
                <div className="">
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
                </div>
            </section>
        </article>
    );
}

export default SectionCards;