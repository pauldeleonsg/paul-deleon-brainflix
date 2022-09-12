// CONTENT.JS //

import Feature from "../Feature/Feature";
import ConvForm from "../ConvForm/ConvForm";
import VideoList from "../VideoList/VideoList";

function Content() {

    
    return (

        <div className="content-card">
            <div className="content-card__aside">
                <Feature />

                <ConvForm />
            </div>
            <div className="content-card__aside">
                <VideoList />
            </div>
            
        </div>
        
    )
}


export default Content;







//notes: