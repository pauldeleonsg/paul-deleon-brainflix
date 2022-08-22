// FEATURE.JS //

function Feature(props) {
    

    return (
        <>
            <div className="feature-card">

                <div className="feature-card__item featTitle">
                    <h1>{props.vidtitle}</h1>
                </div>


                <div className="feature-card__item featLabel">
                    <div className="feature-card__label">
                        <span className="lblDark lblName">{props.vidchannel}</span>
                        <span className="lblLight">{props.vidtime}</span>
                    </div>

                    <div className="feature-card__label">
                        <span className="lblLight lblView">{props.vidviews}</span>
                        <span className="lblLight lblLike">{props.vidlikes}</span>
                    </div>
                </div>

            </div>

            <hr />

            <div className="feature-card">

                <div className="feature-card__item featAbout">
                    {/*<p>ID: {props.vidid}</p>*/}
                    <p>{props.viddesc}</p>
                    
                </div>
            </div>
        </>
        
    )
}



export default Feature;