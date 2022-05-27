import React from "react";
import {Link} from "react-router-dom"
import Animation from "./Animation"
import Icon from "./Icon"

function About(){
    return(
        <Animation>
        <div className="flex h-screen w-screen z-10 text-white justify-center items-center">
                <div className="flex w-1/2 pb-24">
                    <div className="mx-auto w-1/2">
                        <h1 className="text-6xl text-green-400 pb-7">About Me</h1> 
                        <h2 className="text-3xl text-green-500 pb-5"> I'm a web developer from <br/> Dublin, Ireland.</h2>
                        <p className="text-xl pb-3"> I am currently studying Computing at Dublin Business School to obtain a honours degree.</p>
                        <p className="text-xl pb-3"> I have a big interest in developing Web3 applications and I'd love to hear about any projects you have in the works, 
                        you can contact me <Link to="/About" className="text-green-500 hover:text-green-300 " >here :)</Link>.</p>
                        <p className="text-xl pb-3"> Although the skills I have on display are technologise I'm very good at I am a quick learner and can pick up new 
                        technologise when needed.</p>
                        <p className="text-xl pb-3"> I have a passion for writing clean and effiecient code using the latest development princibles and techniques to ensure
                        each site I build is search engine friendly and responsive.
                        </p>
                    </div>
                </div>
          

            <div className="  w-1/2 ">
                <div className="container pb-24">
                <h2 className="text-3xl text-green-400 pb-2 pt-5 pl-5"> My Skills</h2>
                    <div className="w-4/6 rounded-3xl bg-gray-800 shadow">
                    
                            <table class=" text-center mx-auto">
                                <tbody>
                                    <tr> 
                                        <Icon img="Images/ReactLogo.png" p="React.js"/>
                                        <Icon img="Images/express-logo.png" p="Express"/>
                                        <Icon img="Images/next-js.svg" p="Next.js"/>
                                        <Icon img="Images/GitHubLogo.png" p="GitHub"/>
                                        <Icon img="Images/C++Logo.png" p="C++"/>
                                    </tr>
                                    <tr>
                                        <Icon img="Images/BootstrapLogo.png" p="Bootstrap"/>
                                        <Icon img="Images/SolidityLogo.png" p="Solidity"/>
                                        <Icon img="Images/CLogo.png" p="C#"/>
                                        <Icon img="Images/Tailwind_CSS_Logo.png" p="Tailwind"/>
                                        <Icon img="Images/JavascriptLogo.png" p="Javascript"/>
                                    </tr>
                                    <tr>
                                        <Icon img="Images/PythonLogo.png" p="Python"/>
                                        <Icon img="Images/nodeLogo.png" p="Node"/>
                                        <Icon img="Images/CSS3.png" p="CSS"/>
                                        <Icon img="Images/mongodb-logo.png" p="MongoDB"/>
                                        <Icon img="Images/AWSLogo.png" p="AWS"/>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-green-500 pt-3 pl-5">It's satisfying to flip the logos :D</p>
                </div>

            </div>
        </div>
        </Animation>
    );
}

export default About;