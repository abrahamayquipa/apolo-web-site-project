import waves from '../assets/images/waves.webp'

function Card(props) {
    return(
        <article className="c-card">
            <img src={waves} alt="waves" className="c-waves"/>
            <div className="c-card__title">
                <span className="u-font--bold-white">
                    {props.title || ""}
                </span>
            </div>
            <p className="u-font-regular--gray">
                {props.text || ""}
            </p>
        </article>
    );
}

export default Card;