import React from "react";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import dataVidDetails from "../data/video-details.json";



// import NotificationManager from "react-notifications/lib/NotificationManager";
// Main Context export

export const MainContext = createContext();

export default function ContextProvider(props) {
    const [vartry, setVarTry] = useState('vartry');

    const webName = 'Brainflix v2.08';

    const urlApiBase = 'https://project-2-api.herokuapp.com/';

    const [apiKey, setApiKey] = useState('9999');       //hardcoded

    const [videoData, setVideoData] = useState({
        title: dataVidDetails[0].title,
        channel: dataVidDetails[0].channel,
        image: dataVidDetails[0].image,
        description: dataVidDetails[0].description,
        views: dataVidDetails[0].views,
        likes: dataVidDetails[0].likes,
        duration: dataVidDetails[0].duration,
        video: dataVidDetails[0].video,
        timestamp: dataVidDetails[0].timestamp,
        comments: dataVidDetails[0].comments
    });


    const fxnSetWeb = () => {
        document.title = webName;
        return
    }

    
    const fxnApiGetKey = async() => {
        axios
            .get(urlApiBase + 'register') 
            .then(response => {  
                //setApiKey(response.data.api_key);
            })

    };


    const fxnVideoChange = ({data}) => {

        setVideoData(data);
        
    } 


    const fxnUtilDateShort = (itmdate) => {
        const txtDate = new Date(parseInt(itmdate, 10));
        let txtDateFormat = (txtDate.getMonth() + 1) + "/" + txtDate.getDate() + "/" + txtDate.getFullYear()
        
        return txtDateFormat;
    }


    const fxnTxtlimit = (string = "", limit = 0) => {  
        if (string.length > limit) {
            return string.substring(0, limit) + "..."
        }
    
        return string
    }


    


    return (
        <MainContext.Provider
            value={{
                webName,
                urlApiBase,
                apiKey,
                videoData,
                setVideoData,
                setApiKey,
                fxnSetWeb,
                fxnApiGetKey,
                fxnVideoChange,
                fxnUtilDateShort,
                fxnTxtlimit,
                vartry,
            }}>
            {props.children}
        </MainContext.Provider>
    );
}
