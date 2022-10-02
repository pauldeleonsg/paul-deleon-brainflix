import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../../Context/Context';

import ReactPlayer from 'react-player';
import VideoThumb from '../VideoThumb/VideoThumb';
//import VideoList from '../VideoList/VideoList';



const Video = () => {
    const context = useContext(MainContext)

    const passData = (data) => {
        context.setVideoData(data);
    };

    return(
        <>
        <h2>Video</h2>
        <ul>
            <li>
                <ReactPlayer
                    url={context.videoData.video + '?api_key=' + context.apikey}
                    playing='false' controls='true' />
            </li>
            <li><u>Title</u>: {context.videoData.title}</li>
            <li><u>Channel</u>: {context.videoData.channel}</li>
            <li><u>Date</u>: {context.fxnUtilDateShort(context.videoData.timestamp)}</li>
            <li><u>Duration</u>: {context.videoData.duration}</li>
            <li><u>Views</u>: {context.videoData.views}</li>
            <li><u>Likes</u>: {context.videoData.likes}</li>
            <li><u>Description</u>: {context.videoData.description}</li>
            <li><u>Comments</u>: {context.videoData.comments.map}</li>
        </ul>
        <hr />
        
        {/* <VideoList /> */}

        <VideoThumb />
        <hr />
        </>
    )
}

export default Video;