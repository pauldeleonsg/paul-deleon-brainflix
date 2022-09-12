import React from 'react';

import {fxnTxtlimit} from '../Utilities/Utilities';


const VideoThumb = props => {
    const apikey = props.apikey;     //the API Key

    const videoData = {
        apikey: props.apikey,
        id: props.vidId,
        title: props.vidTitle,
        channel: props.vidChannel,
        image: props.vidImage,
        description: '',
        views: '',
        likes: '',
        duration: '',
        video: '',
        timestamp: '',
        comments: []
    };


    const buttonClickHandler = () => {
        props.passData(videoData);
        
    }

    return(
        <>
        <div className='divClick' onClick={buttonClickHandler}>
            <div className='divClick__item'>
                <img src={videoData.image}
                    alt={videoData.title}
                    className='imgThumb' />
            </div>
            <div className='divClick__item'>
                <span>{fxnTxtlimit(videoData.title, 40)}</span><br />
                <span>{videoData.channel}</span>
            </div>
            
        </div>
        </>
    )
}

export default VideoThumb;