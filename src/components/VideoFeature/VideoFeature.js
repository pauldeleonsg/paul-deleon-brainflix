import React from 'react';


const VideoFeature = props => {

    return(
        <>
        <div className="feature-card">
            <div className="feature-card__item featTitle">
                <h1>{props.title}</h1>
            </div>

            <div className="feature-card__item featLabel">
                <div className="feature-card__label">
                    <span className="lblDark lblName">{props.channel}</span>
                    <span className="lblLight">{props.vidtime}</span>
                </div>

                <div className="feature-card__label">
                    <span className="lblLight lblView">{props.vidviews}</span>
                    <span className="lblLight lblLike">{props.vidlikes}</span>
                </div>
            </div>
        </div>

        
        <hr />
            
        </>
    )
}

export default VideoFeature;