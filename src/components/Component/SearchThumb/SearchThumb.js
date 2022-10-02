import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../../../Context/Context';
import axios from "axios";

import './SearchThumb.scss';


const SearchThumb = props => {
    const context = useContext(MainContext);


    const buttonClickHandler = () => {
        // var api = context.apiData.api_key;
        // var vidthumbid = props.videoid;

        // axios
        //     .get(context.urlApiBase + '/videos/' + vidthumbid + '?api_key=' + api)
        //     .then(res => {
        //         context.passVideoMain(res.data);
                
        //     });
        
    }


    return(
        <>
        <div className='div-searchthumb' key={'thb-' + props.videoid} onClick={buttonClickHandler}>
            <div className='div-searchthumb__card'>
                <div className='div-searchthumb__item'>
                    <img className='imgSearchThumb'
                        src={props.videoimage}
                        alt={props.videotitle} />
                </div>
                <div className='div-searchthumb__item'>
                    <ul className='search'>
                        <li><span className='lblDark'>{context.fxnTxtlimit(props.videotitle, 40)}</span></li>
                        <li><span className='lblLight'>{props.videochannel}</span></li>
                        <li><span className='lblLight'>{context.fxnUtilDateShort(props.videotimestamp)}</span></li>
                        <li><span>{context.fxnTxtlimit(props.videodescription, 100)}</span></li>
                    </ul>
                </div>                
            </div>

            
        </div>
        </>
    )
}

export default SearchThumb;