import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../../../Context/Context';
import VideoCommentForm from '../VideoCommentForm/VideoCommentForm';

import './VideoComment.scss';


const VideoComment = () => {
    const context = useContext(MainContext);

    const comntCnt = context.dataVideoMain.comments.length + ' Comment(s)';


    return(
        <>
        <div className='div-videocomment'>
            <div className='div-videocomment__card'>
                <span className='lblDark'>{comntCnt}</span>
            </div>
        </div>

        <div className='div-videocomment'>
            <div className='div-videocomment__card'>
                <VideoCommentForm />
            </div>
        </div>
        
        </>
    )
}

export default VideoComment;
