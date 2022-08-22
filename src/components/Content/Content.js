// CONTENT.JS //

import Video from "../Video/Video"
import Feature from "../Feature/Feature"
import ConvForm from "../ConvForm/ConvForm"
import VideoList from "../VideoList/VideoList"
import React from "react"

//import * as vidData from "../../data/video-details.json";


class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stateID : "",
        };
    }

    
    render() {
        return (
            <>
            <Video />
            
            <div className="content-card">
                <div className="content-card__aside">
                    <Feature />
    
                    <ConvForm />
                </div>
                <div className="content-card__aside">
                    <VideoList />
                </div>
                
            </div>
            </>       
        )
    }
}


export default Content;







//notes: