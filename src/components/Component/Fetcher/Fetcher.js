import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../../../Context/Context';


const Fetcher = () => {
    const context = useContext(MainContext);

    var post;

    // Call the API
    fetch('https://project-2-api.herokuapp.com/register').then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        // Store the post data to a variable
        post = data;
        context.passApiData(post);

        // Fetch another API
        return fetch('https://project-2-api.herokuapp.com/videos/?api_key=' + data.api_key);

    }).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (vidData) {
        console.log(post, vidData);
    }).catch(function (error) {
        console.warn(error);
    });

    return (
        <>
        <div>
            <h3>fetcher</h3>
        </div>
        </>
    )

}

export default Fetcher;