import React from "react";

function Icon(props) {

return(
    <td className="flip w-1/5 h-1/5 p-2">
        <img  className="m-auto w-32 h-20" src={props.img} alt="Logo" ></img>
        <p>{props.p}</p>
    </td>

)


}

export default Icon;
