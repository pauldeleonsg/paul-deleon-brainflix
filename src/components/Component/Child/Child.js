import React, { useContext } from 'react';
import { MainContext } from '../../../Context/Context';

const Child = props => {
    const context = useContext(MainContext);

    const person = {
        name: 'kagney slurp',
        age: 69
    };

    const buttonClickHandler = () => {
        props.passData(person);
    }
    
    return (
        <>  
        
        <div>
            <h3>Child</h3>
            <button onClick={buttonClickHandler}>slurp who?</button>
        </div>
            

        </>
    )
    
}
        
    

export default Child;