import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../../../Context/Context';
import axios from "axios";

import './VideoThumb.scss';


const VideoThumb = props => {
    const context = useContext(MainContext)

    //const videodata = {}

    const buttonClickHandler = () => {
        var api = context.apiData.api_key;
        var vidthumbid = props.videoid;

        axios
            .get(context.urlApiBase + '/videos/' + vidthumbid + '?api_key=' + api)
            .then(res => {
                context.passVideoMain(res.data);
                
            });
        
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