import waves from '../assets/images/waves.webp'

function Card(props) {
    return(
        <article className="">
            <div className="">
                <span className="">
                    {props.title || ""}
                </span>
            </div>
            <p className="">
                {props.text || ""}
            </p>
        </article>
    );
}

export default Card;