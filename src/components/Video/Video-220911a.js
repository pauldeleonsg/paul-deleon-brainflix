// VIDEOS.JS //


function Video(props) {
    
    return (
        
        <div className="video-card">
            <div className="video-card__aside">
                <img src={props.vidimg} alt={props.vidtitle} className='vidCover' />
            </div>
        </div>
        
    )
}

export default Video;




//notes:
//The ”Next Video” sidebar must not contain the current video being displayed.