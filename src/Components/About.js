import React from "react";
import {Link} from "react-router-dom"

function About(){
    return(
        <div className="flex h-5/6 w-full z-10 text-white absolute justify-center items-center">
            
      
                <div className="flex w-1/2">
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
          

            <div className="  w-1/2">
                <div className="container mx-auto">
                <h2 className="text-3xl text-green-400 pb-2 pt-5 pl-5"> My Skills</h2>
                    <div className="w-4/6 rounded-3xl bg-gray-800 shadow">
                    
                            <table class=" text-center mx-auto ">
                                <tbody>
                                    <tr> 
                                        <td className="flip w-40 h-40">
                                            <img  className="m-auto w-24 h-24" src="Images/ReactLogo.png" alt="React Logo" ></img>
                                            <p>React.js</p>
                                        </td>
                                        <td className="flip w-40 h-40 ">
                                            <img  className="m-auto w-24 h-24" src="Images/express-logo.png" alt="AWS Logo" ></img>
                                            <p>Express</p>
                                        </td>
                                        <td className="flip w-40 h-40">
                                            <img  className="m-auto w-24 h-24" src="Images/next-js.svg" alt="Next Logo" ></img>
                                            <p>Next.js</p>
                                        </td>
                                        <td className="flip w-40 h-40 ">
                                            <img  className="m-auto w-24 h-24" src="Images/GitHubLogo.png" alt="AWS Logo" ></img>
                                            <p>GitHub</p>
                                        </td>
                                        <td className="flip w-40 h-40 ">
                                            <img  className="m-auto w-24 h-24" src="Images/C++Logo.png" alt="C++ Logo" ></img>
                                            <p>C++</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="flip w-40 h-40 ">
                                            <img  className="m-auto w-24 h-24" src="Images/BootstrapLogo.png" alt="Bootstrap Logo" ></img>
                                            <p>Bootstrap</p>
                                        </td>
                                        <td className="flip w-40 h-40">
                                            <img  className="m-auto w-30 h-30" src="Images/SolidityLogo.png" alt="Solidity Logo" ></img>
                                            <p>Solidity</p>
                                        </td>
                                        <td className="flip w-40 h-40 ">
                                            <img  className="m-auto w-24 h-24" src="Images/CLogo.png" alt="C# Logo" ></img>
                                            <p>C#</p>
                                        </td>
                                        <td className="flip w-40 h-40 ">
                                            <img  className="m-auto w-24 h-24" src="Images/Tailwind_CSS_Logo.png" alt="AWS Logo" ></img>
                                            <p>Tailwind</p>
                                        </td>
                                        <td className="flip w-40 h-40">
                                            <img  className="m-auto w-24 h-24" src="Images/JavascriptLogo.png" alt="Javascript Logo" ></img>
                                            <p>Javascript</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="flip w-40 h-40">
                                            <img  className="m-auto w-24 h-24" src="Images/PythonLogo.png" alt="Python Logo"></img>
                                            <p>Python</p>
                                        </td>
                                        <td className="flip w-40 h-40 ">
                                            <img  className="m-auto w-24 h-24" src="Images/nodeLogo.png" alt="Node Logo"></img>
                                            <p>Node.js</p>
                                        </td>
                                        <td className="flip w-40 h-40">
                                            <img  className="m-auto w-24 h-24" src="Images/CSS3.png" alt="CSS3 Logo" ></img>
                                            <p>CSS</p>
                                        </td>
                                        <td className="flip w-40 h-40 ">
                                            <img  className="m-auto w-24 h-24" src="Images/mongodb-logo.png" alt="AWS Logo" ></img>
                                            <p>Mongo DB</p>
                                        </td>
                                        <td className="flip w-40 h-40 ">
                                            <img  className="m-auto w-24 h-24" src="Images/AWSLogo.png" alt="AWS Logo" ></img>
                                            <p>AWS</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-green-500 pt-3 pl-5">It's satisfying to flip the logos :D</p>
                </div>

            </div>
                

       
            
        </div>
    );
}

export default About;