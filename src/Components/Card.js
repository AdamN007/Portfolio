import React from "react";

function Card(props){
    return(

        <div class="max-w-sm bg-gray-900 rounded-lg border border-green-400 shadow-xl transition">
       
            <img class="rounded-t-lg border-b border-green-400" src={props.img} alt="Projects" />
        
        <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{props.title}</h5>
            <p class="mb-3 font-normal text-gray-400">{props.description}</p>
            <a href="https://freefrontend.com/css-timelines/#vertical-timelines" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-400">
                View Github
                <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
    )


}

export default Card;