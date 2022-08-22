// CONVFORM.JS //

import {fxnUtilDateShort} from "../Utilities/Utilities";

function ConvForm(props) {
    
    let {
        vidid : vidFeatID, 
        vidcmnts : vidComments
      } = props;

      let cntComments = vidComments.length;
      let cntCommentsTail = " Comment";

      if (cntComments > 0){
        cntCommentsTail = " Comments";
      }

      cntComments += cntCommentsTail;

      const dataVidComments = vidComments.map((info) => {
        
        return(
            <>
            <hr />
            <div className="convform-card">

                <div className="convform-card__item">
                    <div className="convform-card__row--label">
                        <div className='avatarName'>
                            {info.name.substr(0,1)}
                        </div>
                    </div>

                    <div className="convform-card__row--input">
                        <div className="convform-card__inlabel">
                            <span className="lblDark">{info.name}</span>
                            <span className="lblLight">{fxnUtilDateShort(info.timestamp)}</span>
                        </div>
                        
                        
                        <p>{info.comment}</p>
                    </div>
                </div>
            </div>
            </>
        )
    })

    return (
        <>
        <div className="convform-card" id={vidFeatID}>
            <span className="lblDark">{cntComments}</span>

            {/* FORM */}
            <div className="convform-card__item convForm">
                <div className="convform-card__row--label">
                    <div className="avatarHold">
                        <img className="avatar" src={require('../../assets/images/Mohan-muruge.jpg')} alt="This is you" />
                    </div>
                </div>

                <div className="convform-card__row--input">
                    <span className="lblLight lblAbove">Join the conversation</span>
                    <textarea className="inpComment" placeholder="Add a new comment" id="txtComment" />
                    <button className="btnComment">Comment</button>
                </div>
            </div>
        </div>
        
        {dataVidComments}
        
        </>
    )
}


export default ConvForm;







//notes: