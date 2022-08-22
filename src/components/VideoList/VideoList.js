// VIDEOLIST.JS //
import { fxnTxtlimit } from "../Utilities/Utilities";
import JsonData from "../../data/videos.json";


function VideoList(props) {
    
    const vidDisplayData = JsonData.map((info) => {
        
        if (info.id !== props.vidid) {
            return(
                <div className="videolist-card__item" key={info.id}>
                    <div className="videolist-card__row--label">
                        <img src={info.image} className="imgThumb" alt={info.title} />
                    </div>
                    <div className="videolist-card__row--input">
                        <span className="lblDark">{fxnTxtlimit(info.title, 40)}</span>
                        <span className="lblNormal">{info.channel}</span>
                    </div>
                </div>
            )
        }

        return <></>
    }
    )
    
    

    return(
        <>
        <div className="videolist-card">
            <div className="videolist-card__title"><span className="lblLight">Next Videos</span></div>
            {vidDisplayData}
        </div>
        </>        
    )

}


export default VideoList;







//notes:
//truncate string
//https://futurestud.io/tutorials/limit-and-truncate-a-string-to-a-given-length-in-javascript-and-node-js