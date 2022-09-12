// FEATURE.JS //

import * as vidData from "../../data/video-details.json";


function Feature() {
    
    const loadedData = JSON.stringify(vidData);
    const myData = JSON.parse(loadedData);

    const vidFeatID = myData[0].id;
    const vidFeatTitle = myData[0].title;
    const vidFeatChannel = myData[0].channel;
    const vidFeatTime = myData[0].timestamp;
    const vidFeatView = myData[0].views;
    const vidFeatLike = myData[0].likes;
    const vidFeatDesc = myData[0].description;
    

    return (
        <>
            <div className="feature-card">

                {/* TITLE */}
                <div className="feature-card__item featTitle">
                    <h1>{vidFeatTitle}</h1>
                </div>


                {/* LABELS */}
                <div className="feature-card__item featLabel">
                    <div className="feature-card__label">
                        <span className="lblDark lblName">{vidFeatChannel}</span>
                        <span className="lblLight">{vidFeatTime}</span>
                    </div>

                    <div className="feature-card__label">
                        <span className="lblLight lblView">{vidFeatView}</span>
                        <span className="lblLight lblLike">{vidFeatLike}</span>
                    </div>
                </div>

            </div>

            <hr />

            <div className="feature-card">

                {/* ABOUT */}
                <div className="feature-card__item featAbout">
                    <p>ID: {vidFeatID}</p>
                    <p>{vidFeatDesc}</p>
                    
                </div>
            </div>
        </>
        
    )
}



export default Feature;