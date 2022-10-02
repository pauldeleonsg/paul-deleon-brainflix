import React, {useContext} from 'react';
import { MainContext } from '../../../Context/Context';
import './Etal.scss';


const Etal = () => {
    const context = useContext(MainContext);

    let etalYear =  new Date().getFullYear();

    return (
        <>
        <div className="div-etal">
            {etalYear} {context.webName} ㋡
            {/* {context.apiData.api_key} | {context.videoList[0]?.id} */}
        </div>
        </>
    )
}

export default Etal;