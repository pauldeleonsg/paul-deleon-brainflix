import React, { useContext, useState } from 'react';
import { MainContext } from '../../../Context/Context';

import './VideoCommentForm.scss';

const VideoCommentForm = () => {
    const context = useContext(MainContext);

    const [videoComnt, setVideoComnt] = useState('');
    
    const onSubmitHandler = (event) => {
        setVideoComnt(event.target.value);

        console.log('hey');
    };

    return(
        <>
        <div className='div-videocommentform'>
            <div className='div-videocommentform__card'>
                <div className="div-videocommentform__row--label"></div>

                <div className="div-videocommentform__row--input">
                    <div className="div-videocommentform__inlabel">
                        <span className="lblLight">Join the Conversation</span>
                    </div>
                </div>
            </div>

            <div className='div-videocommentform__card'>
                <div className="div-videocommentform__row--label">
                    <span className='avatarName'>
                        <img className="avatar" 
                            src={require('../../../Assets/images/Mohan-muruge.jpg')} 
                            alt="This is you" />
                    </span>
                </div>

                <div className="div-videocommentform__row--input">
                    <div className='div-videocommentform__incomment'>
                        <textarea className="inpComment" placeholder="Add a new comment" id="txtComment" />
                        <button className="btnComment" onSubmit={onSubmitHandler}>Comment</button>
                    </div>

                </div>
            </div>

        </div>
        </>
    )
}

export default VideoCommentForm;