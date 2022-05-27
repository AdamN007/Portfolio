
import React from "react";
import { Route, Routes, useLocation,} from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { AnimatePresence } from "framer-motion";
import Projects from "./Components/Projects";

function App(){

  const location = useLocation();

  return(
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="*" element={<Home/>}/>
          <Route path="Home" element={<Home/>}/> 
          <Route path="About" element={<About/>}/>
          <Route path="Projects" element={<Projects/>}/>
          <Route path="Contact" element={<Contact/>}/>
        </Routes>
      </AnimatePresence>
        <Navbar/>
    </div>
  );


}

export default App;
