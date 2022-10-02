import React from "react";
import { useState, createContext } from "react";
import axios from "axios";


export const MainContext = createContext();

export default function ContextProvider(props) {
    const webName = 'Brainflix v3.02';
    const fxnSetWeb = () => {
        document.title = webName;
        return
    }

    const urlApiBase = 'https://project-2-api.herokuapp.com';


    //childData
    const [childData, setChildData] = useState({
        name: 'unknown',
        age: 'unknown'
    });    

    const passData = (data) => {
        setChildData(data);
    };


    //apikey
    const [apiData, setApiData] = useState({});    

    const passApiData = (data) => {
        setApiData(data);
    };

    const fxnApiRegister = () => {
        axios
            .get(urlApiBase + '/register')
            .then(res => {
                passApiData(res.data);
                });
    }


    //main video
    const [dataVideoMain, setVideoMain] = useState({
        id: 'unknown',
        title: 'unknown',
        channel: 'unknown',
        image: 'unknown',
        description: 'unknown',
        views: 1234,
        likes: 5678,
        duration: 9870,
        video: '',
        timestamp: '01234567890123',
        comments: []
    });    

    //const [dataVideoMain, setVideoMain] = useState({});  

    const passVideoMain = (data) => {
        setVideoMain(data);
    };

    const fxnApiVideo = (data) => {
        axios
            .get(urlApiBase + '/videos/' + data + '?api_key=' + apiData.api_key)
            .then(res => {
                console.log(res.data);
                //passVideoMain(res.data);
            });
    }



    //video list
    const [videoList, setVideoList] = useState([]);
    
    const passVideoList = (data) => {
        setVideoList(data);
    };

    const fxnApiVideoList = () => {
        axios
            .get(urlApiBase + '/videos/?api_key=' + apiData.api_key)
            .then(res => {
                setVideoList(res.data);
            });
    }


    //search list
    const [srchKey, setSrchKey] = useState('');
    const passSrchKey = (data) => {
        setSrchKey(data);
    };

    const [searchList, setSearchList] = useState([]);

    const passSearchList = (data) => {
        setSearchList(data);
    };

    const fxnApiSearchList = () => {
        axios
            .get('http://localhost:1234/videos')
            .then(res => {
                setSearchList(res.data);
            });
    }


    //fetcher - initialize main data
    const fxnFetcher = () => {
        var post;
        var api;
        var firstvid;

        // Call the API
        fetch('https://project-2-api.herokuapp.com/register')
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response);
                }
            })
            .then(function (data) {
                // Store the post data to a variable
                post = data;
                api = data.api_key;
                
                passApiData(post);
                
                // Fetch another API
                return fetch('https://project-2-api.herokuapp.com/videos/?api_key=' + api);

            })
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response);
                }

            })
            .then(function (vidData) {
                firstvid = vidData[0]?.id;
                passVideoList(vidData);
                return fetch('https://project-2-api.herokuapp.com/videos/' + firstvid + '?api_key=' + api);

            })
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response);
                }

            })
            .then(function (vidMain) {
                setVideoMain(vidMain);
                
            })
            .catch(function (error) {
                console.warn(error);
            });
    }


    //short date
    const fxnUtilDateShort = (itmdate) => {
        const txtDate = new Date(parseInt(itmdate, 10));
        let txtDateFormat = (txtDate.getMonth() + 1) + "/" + txtDate.getDate() + "/" + txtDate.getFullYear()
        
        return txtDateFormat;
    }


    //short text
    const fxnTxtlimit =  (string = "", limit = 0) => {  
        if (string.length > limit) {
            return string.substring(0, limit) + "..."
        }
    
        return string
    }



    return (
        <MainContext.Provider
            value={{
                webName,
                fxnSetWeb,
                urlApiBase,
                childData, 
                setChildData,
                passData,
                apiData,
                setApiData,
                passApiData,
                fxnApiRegister,
                dataVideoMain, 
                setVideoMain,
                passVideoMain,
                fxnApiVideo,
                videoList, 
                setVideoList,
                passVideoList,
                fxnApiVideoList,
                srchKey, 
                setSrchKey,
                passSrchKey,
                searchList,
                setSearchList,
                passSearchList,
                fxnApiSearchList,
                fxnFetcher,
                fxnUtilDateShort,
                fxnTxtlimit
            }}>
            {props.children}
        </MainContext.Provider>
    );
}
