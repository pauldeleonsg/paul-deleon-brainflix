import React, { useContext, useState } from 'react';
import { MainContext } from '../../../Context/Context';

import './VideoCommentForm.scss';

const VideoCommentForm = () => {
    const context = useContext(MainContext);
    
    const [videoComnt, setVideoComnt] = useState('');
    const [errMsg, setErrMsg] = useState('');
    
    let buttonClickComnt = async (event) => {
        var vididcomnt = context.dataVideoMain.id;
        var api = context.apiData.api_key;
        var urlapicomnt = 'https://project-2-api.herokuapp.com/videos/' + vididcomnt + '/comments/?api_key=' + api;

        event.preventDefault();
        
        if (videoComnt) {
            try {
                let res = await fetch(urlapicomnt, {                
                    method: "POST",
                    body: JSON.stringify({
                        name: 'Mohan Muruge',
                        comment: videoComnt
                    }),
                });
                let resJson = await res.json();
                
                if (res.status === 200) {
                    context.passVideoMain(vididcomnt);
                    setVideoComnt('');
                } else {
                    setErrMsg('Uh-oh. Sorry, but some error occured. Please try again shortly.');
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            setErrMsg('Sorry! Please enter a valid comment.');
        }
    }

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
                        
                        <textarea
                            className="inpComment" 
                            placeholder="Add a new comment" 
                            id="txtComment"
                            value={videoComnt}
                            onChange={(e) => setVideoComnt(e.target.value)} />
                        <button className="btnComment" onClick={buttonClickComnt}>Comment</button>
                    </div>
                    <span className='lblError'>{errMsg}</span>
                </div>
            </div>

        </div>
        </>
    )
}

export default VideoCommentForm;