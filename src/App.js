import './App.scss';
import { fxnUtilDateShort } from './components/Utilities/Utilities';
import dataVidDetails from "./data/video-details.json";

import Header from './components/Header/Header';
import Video from './components/Video/Video';
import Feature from './components/Feature/Feature';
import ConvForm from './components/ConvForm/ConvForm';
import VideoList from './components/VideoList/VideoList';
//import Content from './components/Content/Content';


function App() {
  const loadedData = JSON.stringify(dataVidDetails);
  const dataVidMap = JSON.parse(loadedData);

  let {
    id : vidFeatID, 
    title : vidFeatTitle,
    channel : vidFeatChannel, 
    image : vidImage,
    timestamp : vidFeatTime,
    views : vidFeatView,
    likes : vidFeatLike,
    duration : vidDuration,
    video : vidVideo,
    description : vidFeatDesc,
    comments : vidComments 
  } = dataVidMap[0];

  
  
  return (
    <div className="body-card">
        <Header />    

        <Video 
          vidid={vidFeatID} 
          vidtitle={vidFeatTitle} 
          vidimg={vidImage} 
          vidurl={vidVideo} 
          viddur={vidDuration} />

        

        <div className="content-card">
          <div className="content-card__aside">
            <Feature
            vidid={vidFeatID} 
            vidtitle={vidFeatTitle} 
            vidchannel={vidFeatChannel} 
            vidtime={fxnUtilDateShort(vidFeatTime)} 
            vidviews={vidFeatView}
            vidlikes={vidFeatLike}
            viddesc={vidFeatDesc}
            vidcmnts={vidComments} />

            <ConvForm
              vidid={vidFeatID}
              vidcmnts={vidComments} />

          </div>
          <div className="content-card__aside">
              <VideoList
                vidid={vidFeatID}
                vidtitle={vidFeatTitle} 
                vidchannel={vidFeatChannel}
                vidimg={vidImage} />
          </div>
                
        </div>
    </div>
  );
}

export default App;
