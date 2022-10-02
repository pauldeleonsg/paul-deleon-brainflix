import React from 'react';
import { useContext, useEffect } from 'react';
import { MainContext } from '../../../Context/Context';
import SearchThumb from '../SearchThumb/SearchThumb';


import './Search.scss';


const Search = () => {
    const context = useContext(MainContext);

    const queryParams = new URLSearchParams(window.location.search)
    var srckey = queryParams.get("find");


    useEffect(() => {
        context.fxnApiSearchList(srckey);
        
    }, [])
    
    

    
    return(
        <>
        <div className='div-search'>
            <div className='div-search__title'>
                <span className='lblSearchContent'>
                    Searching for: {srckey}
                </span>
                <span className='lblLight'>Search Results</span>
            </div>

            <div className='div-search__card'>
                {context.searchList.map((video) => (
                    <SearchThumb  
                        videoid = {video.id}
                        videotitle = {video.title}
                        videochannel = {video.channel}
                        videoimage = {video.image}
                        videodescription = {video.description}
                        videotimestamp = {video.timestamp} />
                ))}
            </div>
        </div>
        
        
        
        </>
    )
}

export default Search;