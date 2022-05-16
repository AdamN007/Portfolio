
import React from "react";
import { Route, Routes,} from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Background from "./Components/Background";
import About from "./Components/About";

function App(){

 

  return(
    <div className="container-fluid">

        <Routes>
          <Route path="*" element={<Home/>}/>
          <Route path="Home" element={<Home/>}/> 
          <Route path="About" element={<About/>}/>
        </Routes>
        <Background/>
        <Navbar/>
    </div>
  );


}

export default App;
