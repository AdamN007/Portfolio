import React from "react";
import Card from "./Card";
import Animation from "./Animation";

function Projects(){
    return (
        <Animation>
            <h1 className="text-green-500 text-5xl text-center pt-20">Projects</h1>
            <div className="flex h-1/2 w-screen z-10 text-white justify-center items-center mt-28">
                <Card 
                      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRJl1eVESq_acqsazc5VoUe1uvzn7wV21-w&usqp=CAU" 
                      title="This Website :)"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
                </Card>
                <Card 
                      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRJl1eVESq_acqsazc5VoUe1uvzn7wV21-w&usqp=CAU" 
                      title="This Website :)"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
                </Card>
                <Card 
                      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRJl1eVESq_acqsazc5VoUe1uvzn7wV21-w&usqp=CAU" 
                      title="This Website :)"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
                </Card>
            </div>
        </Animation>
    )


}

export default Projects;