import React, { useContext } from 'react';
import { MainContext } from '../../../Context/Context';

import './VideoCommentList.scss';

const VideoCommentList = () => {
    const context = useContext(MainContext);


    return (
        <>
        <div className='div-videocommentlist'>
            {context.dataVideoMain.comments.map((data) => (                
                <div className='div-videocommentlist__card' key={data.id} >
                    <div className="div-videocommentlist__row--label">
                        <span className='avatarName itemUp'>
                            {data.name.substr(0,1)}
                        </span>
                    </div>

                    <div className="div-videocommentlist__row--input">
                        <div className="div-videocommentlist__inlabel">
                            <span className="lblDark">{data.name}</span>
                            <span className="lblLight">{context.fxnUtilDateShort(data.timestamp)}</span>
                        </div>
                        
                        <div className='div-videocommentlist__incomment'>
                            {data.comment}
                        </div>

                        <div className='div-videocommentlist__bottom'>
                            <span className='lblLight lblLike'>{data.likes}</span>
                        </div>
                        
                    </div>
                </div>                
            ))}
        </div>
        </>
    )
}

export default VideoCommentList;