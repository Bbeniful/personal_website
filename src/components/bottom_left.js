import { render } from "@testing-library/react";
import CenterImage from "./center_circle_image";

function BottoomSide(){
    return (
        <div className="box_bottom">
            <div className="bottom_side_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non congue nisl, sit amet finibus ipsum. Ut non libero finibus,
             iaculis purus nec, ultrices nisl. Etiam vehicula et tortor sit amet blandit. Pellentesque a neque sapien. Nullam non orci libero. Sed lobortis ultrices tortor ac vulputate.
              Morbi id dui non enim posuere cursus. Morbi metus lorem, posuere id mattis pretium, dignissim non metus. Quisque vitae quam finibus, faucibus mauris vel, auctor risus. Etiam dictum,
            </div>
            <div>
            <CenterImage/>
            </div>
        </div>
    )
}

export default BottoomSide;