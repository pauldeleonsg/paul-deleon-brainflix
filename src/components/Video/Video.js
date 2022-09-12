import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";

import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoThumb from '../VideoThumb/VideoThumb';
import VideoFeature from '../VideoFeature/VideoFeature';


const Video = props => {
    const apikey = props.apikey;
    //console.log(apikey);

    const urlApiVideos = 'https://project-2-api.herokuapp.com/videos/?api_key=' + apikey;
    //console.log(urlApiVideos);

    const [videolist, setVideoList] = useState([]);

    useEffect(() => {
        axios.get(urlApiVideos).then(res => {
            setVideoList(res.data);
        })
    }, [])


    const [videoData, setChildData] = useState({
        apikey: apikey,
        id: '',
        title: '',
        channel: '',
        image: '',
        description: '',
        views: '',
        likes: '',
        duration: '',
        video: '',
        timestamp: '',
        comments: []
    });
    
    const passData = (data) => {
        setChildData(data);
    };



    return (
        <>
        <div className="video-card">
            <div className="video-card__aside">
                <VideoPlayer />
            </div>
        </div>

        <div className="content-card">
            <div className="content-card__aside">
                <VideoFeature
                    apikey = {apikey}
                    title = {videoData.title} />
                
                <div className="feature-card">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at diam sed sem semper mattis. Praesent commodo libero vitae libero faucibus sollicitudin at sed nibh. Aenean tempor non orci non aliquet. Etiam vitae nunc sit amet nunc tempor pharetra eu a nulla. Duis pellentesque, lectus ac aliquam facilisis, lectus enim faucibus nisi, quis auctor nunc dolor sed magna. Nunc facilisis massa sit amet urna condimentum tristique. Proin elementum sapien ac eros sagittis cursus. Pellentesque venenatis elementum dolor vel dapibus. Etiam pellentesque vitae tortor id maximus. Nulla viverra congue ipsum. Etiam pretium ligula quis efficitur vehicula. Aliquam eget lobortis diam, ac sodales leo. In quis tempus metus. Donec ac egestas nulla.</p>
                </div>
                

            </div>

            <div className="content-card__aside">
                <div><h3>Next Videos</h3></div>
                {videolist.map((video) => (
                    <VideoThumb 
                        apikey={apikey}
                        vidId = {video.id}
                        vidTitle = {video.title}
                        vidChannel = {video.channel}
                        vidImage = {video.image}
                        passData={passData} />
                ))}
                
            </div>
        </div>
        </>
    )
}

export default Video;
