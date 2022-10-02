import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../../../Context/Context';


const VideoThumb = (props) => {
    const context = useContext(MainContext)

    const videodata = {
        title : props.title,
    }

    const onClickHandler = () => {
        context.setVideoData(videodata);
        
    }


    return(
        <>
        <h4>Video Thumb</h4>
        <button onClick={onClickHandler}>Click Me</button>
        </>
    )
}

export default VideoThumb;