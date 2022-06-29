import React from "react";

function Card(props){
    return(

    <div class="max-w-sm  backgroundCol2 border-b-2 rounded-sm border-b-green-500 shadow hover:-translate-y-2 transition m-1 ">
       
        <div class="p-5">
                <h5 class="mb-2 text-xl font-bold tracking-tight ">{props.title}</h5>
            <p class="mb-3  font-normal text-gray-400">{props.description}</p>
            
        </div>
    </div>
    )


}

export default Card;