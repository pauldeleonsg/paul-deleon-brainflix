import React, { useContext } from 'react';
import { MainContext } from '../../../Context/Context';

import Child from '../Child/Child';

const Children = props => {
    const context = useContext(MainContext);

    return (
        <>
        <h2>Children</h2>
        <Child passData={context.passData} />
        </>
    )
}

export default Children;