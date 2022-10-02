import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../../../Context/Context';

import './VideoThumb.scss';


const VideoThumb = props => {
    const context = useContext(MainContext)

    const videodata = {
        id : props.videoid, 
        title : props.videotitle,
        channel : props.videochannel,
        image: props.videoimage,
        description: 'Description placeholder for ' + props.videoid,
        views: 1234,
        likes: 5678,
        duration: 9870,
        video: '',
        timestamp: '01234567890123',
        comments: []
    }

    const buttonClickHandler = () => {
        //console.log('hey')
        context.passVideoMain(videodata);
        //context.fxnApiVideo(props.videoid);
    }


    return(
        <>
        <div className='div-videothumb' onClick={buttonClickHandler}>
            <div className='div-videothumb__card' key={'thb-' + props.videoid}>
                <div className='div-videothumb__item'>
                    <img className='imgThumb'
                        src={props.videoimage}
                        alt={props.videotitle} />
                </div>

                <div className='div-videothumb__item'>
                    <span className='lblDark'>{props.videotitle}</span>

                    <span>{props.videochannel}</span>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default VideoThumb;