import waves from '../assets/images/waves.webp'

function Card(props) {
    return(
        <article className="card">
            <div className="card__title">
                <span className="font--regular-little-bold">
                    {props.title || "Title"}
                </span>
            </div>
            <p className="font--regular-light-gray">
                {props.text || "text"}
            </p>
        </article>
    );
}

export default Card;