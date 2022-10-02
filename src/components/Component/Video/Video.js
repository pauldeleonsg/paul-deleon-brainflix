import React from 'react';
// import { useContext } from 'react';
// import { MainContext } from '../../../Context/Context';

import './Video.scss';

import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoMain from '../VideoMain/VideoMain';
import VideoList from '../VideoList/VideoList';



const Video = () => {
    
    return (
        <>
        <div className='div-video'>
            <div className='div-video__player'>
                <VideoPlayer />
            </div>
            
            <div className='div-video__body'>
                <div className='div-video__card'>
                    <div className='div-video__card-item'>
                        <VideoMain />
                        
                    </div>

                    <div className='div-video__card-item'>
                        {/* passVideoList */}
                        <VideoList />
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Video;