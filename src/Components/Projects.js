import React from "react";
import Card from "./Card";
import Animation from "./Animation";

function Projects(){
    return (
        <Animation>
            <div className="flex h-screen w-screen z-10 text-white justify-center items-center">
                <Card 
                      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzRJl1eVESq_acqsazc5VoUe1uvzn7wV21-w&usqp=CAU" 
                      title="This Website :)"
                      description="I coded this website from scratch"></Card>
            </div>
        </Animation>
    )


}

export default Projects;