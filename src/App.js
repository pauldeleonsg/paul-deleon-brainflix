import './App.scss';
import React from 'react';

import Header from './components/Header/Header';
import Video from './components/Video/Video';


function App() {
    const apikey = '9999';      //hardcode apikey
  
  return (
    <div className="body-card">
        <Header apikey={apikey} />    
        
        <Video apikey={apikey} />
        
    </div>
  );
}

export default App;







//notes:
//https://reactjsexample.com/full-stack-youtube-clone-for-uploading-and-viewing-pet-videos/