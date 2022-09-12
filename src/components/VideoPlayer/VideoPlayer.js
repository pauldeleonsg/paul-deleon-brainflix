import React from 'react';
import ReactPlayer from 'react-player';


const VideoPlayer = props => {

    return(
        <>
        <ReactPlayer url='https://www.youtube.com/watch?v=zTcFpGPiX6c' width='800px' height='450px' />
        </>
    )
}

export default VideoPlayer;