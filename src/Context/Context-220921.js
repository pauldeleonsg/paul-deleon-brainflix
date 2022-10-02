import React, { useState, createContext } from "react";
//import NotificationManager from "react-notifications/lib/NotificationManager";
// Main Context export

export const MainContext = createContext();

export default function ContextProvider(props) {
    
    const webname = 'Brainflix';
    const API_KEY = '';


    // loading state
    const [loading, setLoading] = useState(false);


    // error
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Uh-oh! Something went wrong.");

    // error handling function
    const errorHandler = (response) => {
        if (response.ok) setError(false);
        if (!response.ok) {
            setLoading(false)
            if (response.status === 401) {
                throw new Error("401 Unauthorized");
            }
        
            if (response.status === 403) {
                throw new Error("403 Forbidden");
            }

            throw new Error("Sorry, data fetching error.");
        }
    };


    return (
        <MainContext.Provider
            value={{
                webname,
                API_KEY,
                error,
                errorMsg,
            }}>
            {props.children}
        </MainContext.Provider>
    );
}
