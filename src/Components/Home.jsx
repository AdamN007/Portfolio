import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react"; 
import Animation from "./Animation";

const Home = () => {

    const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["fullstack", "blockchain", "good :)"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 300,
      smartBackspace: true,
      loop: true,
      showCursor: false
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);



    return(
      <Animation>
        <div className="flex h-screen w-screen z-10 text-white pb-9  justify-center items-center">
            <div className="justify-center items-center w-screen">
                <div className=" text-center">
                    <p className="text-6xl">Hello, I'm <span className="text-green-500">Adam Napper</span></p> 
                </div>
                <div className=" text-center">
                    <h1 className="text-6xl">I'm a <span className="text-green-500" ref={el}></span> developer</h1>
                </div>
            </div>
            
        </div>
      </Animation>
    );
}



export default Home;