// HEADER.JS //

function Header() {
    
    return (
        
        <header className="header-card">

            <div className="header-card__aside">
                {/* LOGO */}
                <div className="header-card__image">
                    <a href="/"><img src={require('../../assets/images/logo/BrainFlix-logo.svg').default} alt="BrainFlix" /></a>
                </div>
            </div>

            <div className="header-card__aside">
                {/* MENU */}
                <div className="header-card__placeholder header-card__search">
                    <input type="text" className="inpSearch" placeholder="Search" id="txtsearch" />
                </div>


                {/* UPLOAD */}
                <div className="header-card__placeholder header-card__upload">
                    <button className="btnUpload">Upload</button>
                </div>


                {/* USER */}
                <div className="header-card__placeholder header-card__image">
                    <a href="/"><img className="avatar" src={require('../../assets/images/Mohan-muruge.jpg')} alt="This is you" /></a>
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