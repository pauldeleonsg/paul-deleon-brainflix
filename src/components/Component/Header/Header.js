// HEADER.JS //
import React from 'react';
import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { MainContext } from '../../../Context/Context';


import './Header.scss';


function Header() {
    const context = useContext(MainContext);
    const navigate = useNavigate();

    const onChange = (event) => {
        context.setSrchKey(event.target.value);
        //console.log('event target: ', event.target.value)
    };



    useEffect(() => {
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                //console.log("Enter key was pressed. Run your function.");
                event.preventDefault();
                context.setSrchKey(event.target.value);
                navigate('/search?find=' + event.target.value);
                // callMyFunction();
            }};
        
            document.addEventListener("keydown", listener);
            
            return () => {
            document.removeEventListener("keydown", listener);
            };
        },[]);

    

    
    return (
        
        <header className="header-card">

            <div className="header-card__aside">
                {/* LOGO */}
                <div className="header-card__image">
                    <a href="/"><img src={require('../../../Assets/images/logo/BrainFlix-logo.svg').default} alt="BrainFlix" /></a>
                </div>
            </div>

            <div className="header-card__aside">
                {/* MENU */}
                <div className="header-card__placeholder header-card__search">
                    <input type="text" 
                        className="inpSearch" 
                        placeholder="Search" 
                        id="txtsearch" 
                        value={context.srchKey}
                        onChange={onChange}
                        //onSubmit={handleSubmit}
                        //onChange={handleChange}
                        //value={searchKey}
                        />
                </div>


                {/* UPLOAD */}
                <div className="header-card__placeholder header-card__upload">
                    <button className="btnUpload">Upload</button>
                </div>


                {/* USER */}
                <div className="header-card__placeholder header-card__image">
                    <a href="/account"><img className="avatar" src={require('../../../Assets/images/Mohan-muruge.jpg')} alt="This is you" /></a>
                </div>
            </div>
        </header>
        
    )
}

export default Header;







//notes:
//- relative url
//-- that's a head scratcher
//- using svg
//-- why add .default??? why?
//-- https://stackoverflow.com/questions/42296499/how-to-display-svg-icons-svg-files-in-ui-using-react-component