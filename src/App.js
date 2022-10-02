import React, { useContext, useEffect } from 'react';
import { MainContext } from './Context/Context';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.scss';
import Etal from './Components/Component/Etal/Etal';
import Video from './Components/Component/Video/Video';
import Header from './Components/Component/Header/Header';
import Account from './Components/Component/Account/Account';
import Search from './Components/Component/Search/Search';

const App = () => {
    const context = useContext(MainContext);

    useEffect(() => {
        context.fxnSetWeb();
        context.fxnFetcher();
    }, [])


    return (
        <>
        <BrowserRouter>
            <div className='div-body'>
            <Header />

            <Routes>
                <Route path="/" element={<Video />} />
                <Route path="/account" element={<Account />} />
                <Route path="/search" element={<Search />} />
            </Routes>

            {/* <FormSamp /> */}
            
            <Etal />
            </div>
      
        </BrowserRouter>
        </>
    );
}

export default App;