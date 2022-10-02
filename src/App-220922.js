import React, { useContext, useState, useEffect } from 'react';
import Header from './Components/Component/Header/Header';
import Video from './Components/Component/Video/Video';

import { MainContext } from './Context/Context';



const App = () => {
    const context = useContext(MainContext);

    
    context.fxnSetWeb();

    //context.fxnApiGetKey();

    

    return (
        <>
            <h1>{context.webName}</h1>
            <hr />
            
            <Header />
            <hr />

            <Video />
        </>
    );
}

export default App;
