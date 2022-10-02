import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../../../Context/Context';

import VideoThumb from '../VideoThumb/VideoThumb';

import './VideoList.scss';


const VideoList = () => {
    const context = useContext(MainContext);

    return (
        <>
        <div className='div-videolist'>
            <span className='lblLight'>Next Videos</span>
        </div>

        
        {context.videoList.map((video) => (
            <VideoThumb 
                videoid = {video.id}
                videotitle = {video.title}
                videochannel = {video.channel}
                videoimage = {video.image} />
        ))}
        
        </>
    )
}

export default VideoList;