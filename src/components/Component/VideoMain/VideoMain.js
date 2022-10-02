import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../../../Context/Context';
import VideoComment from '../VideoComment/VideoComment';
import VideoCommentList from '../VideoCommentList/VideoCommentList';

import './VideoMain.scss';

const VideoMain = () => {
    const context = useContext(MainContext);

    return (
        <>
        <div className='div-videomain'>
            <div className='div-videomain__card'>
                <div className='div-videomain__title'>
                    <span className='lblTitle'>
                        {context.dataVideoMain.title}
                    </span>
                </div>

                <div className='div-videomain__subtitle'>
                    <div className='div-videomain__subtitle-item'>
                        <span className='lblDark lblName'>
                            By {context.dataVideoMain.channel}
                        </span>
                        <span className='lblLight'>
                            {context.fxnUtilDateShort(context.dataVideoMain.timestamp)}
                        </span>
                    </div>

                    <div className='div-videomain__subtitle-item'>
                        <span className='lblLight lblView'>
                            {context.dataVideoMain.views}
                        </span>
                        <span className='lblLight lblLike'>
                            {context.dataVideoMain.likes}
                        </span>
                    </div>
                </div>
            </div>
            
        </div>

        <div className='div-videomain'>
            <div className='div-videomain__card'>
                {context.dataVideoMain.description}
            </div>

            <div className='div-videomain__card'>
                <VideoComment />
            </div>

        </div>

        <div className='div-videomain'>
            <div className='div-videomain__card'>
                <VideoCommentList />
            </div>
        </div>
        
        </>
    )
}

export default VideoMain;