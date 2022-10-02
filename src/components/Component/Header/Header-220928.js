// HEADER.JS //
import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


import './Header.scss';


function Header() {
    const navigate = useNavigate();
    const [searchKey, setSearchKey] = useState('');
    

    const handleSubmit = event => {
        //event.preventDefault();
        
        console.log('form submitted ✅');
        navigate('/search');
    };


    useEffect(() => {
        const keyDownHandler = event => {
            console.log('User pressed: ', event.key);
            
            if (event.key === 'Enter') {
                event.preventDefault();
        
                // 👇️ call submit function here
                handleSubmit();
            }

        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, []);
    
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
                    <input type="text" className="inpSearch" placeholder="Search" id="txtsearch" onChange={setSearchKey} onSubmit={handleSubmit} />
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