import { render } from "@testing-library/react";
import CenterImage from "./center_circle_image";


function TopSide(){
    return (
        <div className="box">
            <CenterImage/>
            <div className="top_side_text">
            Hi, my name is Benjamin. This is gonna be my website soon.
            </div>
        </div>

        
    )
}

export default TopSide;
