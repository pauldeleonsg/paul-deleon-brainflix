import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../../../Context/Context';
//import ReactPlayer from 'react-player';

import './VideoPlayer.scss';


const VideoPlayer = props => {
    const context = useContext(MainContext)
    
    return (
        <>
        <div className='div-videoplayer'>
            <video controls width='800'>
                <source src={'https://project-2-api.herokuapp.com/stream?api_key=' + context.apiData.api_key} />
            </video>
        </div>
        </>
    )
}

export default VideoPlayer;