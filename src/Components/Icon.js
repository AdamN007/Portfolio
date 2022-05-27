import React from "react";

function Icon(props) {

return(
    <td className="flip w-40 h-40">
        <img  className="m-auto w-24 h-24" src={props.img} alt="Logo" ></img>
        <p>{props.p}</p>
    </td>

)


}

export default Icon;
