import React from "react";
import { NavLink, } from "react-router-dom";

//localStorage.setItem('scrollVal', '1');


function Navbar(){

    /*var currentUrl = window.location.href;
    let navigate = useNavigate();
    let scrollCount = parseInt(localStorage.getItem('scrollVal'));
        window.addEventListener('mousewheel', function(e){

        if(e.wheelDelta<0){
            scrollCount++;
            console.log(scrollCount)
        }

        else if(e.wheelDelta>0){
            scrollCount--;
        }

        document.querySelector('.number').innerHTML = scrollCount;

        if(scrollCount >= 0 && currentUrl !== "http://localhost:3004/Home"){
            localStorage.setItem('scrollVal', '0');
            navigate({pathname: '/Home',
        });
    }

        if(scrollCount >= 50 && currentUrl !== "http://localhost:3004/About" ){
            localStorage.setItem('scrollVal', '51');
            navigate({pathname: '/About',
        });
    
    }
        

        
    })*/
    

    return(
        <div>
                <div className="fixed right-0 w-4/12 hello2">
                <ul className="soc"> 
                    <li><a href="#" className="icon codepen" title="CodePen"><svg viewBox="0 0 512 512">
                        <path d="M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 
                        191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4
                        3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9
                        427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3
                        127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 
                        384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 
                        384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z"/></svg></a>
                    </li>
                    <li><a href="#" className="icon github" title="GitHub"><svg viewBox="0 0 512 512">
                        <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 
                        176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2
                         -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2
                          11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5
                           51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6
                            3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0
                             24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/>
                        </svg></a>
                    </li>
                    <li><a href="linkedin.com/in/adam-napper-49399b221" className="icon linkedin" title="LinkedIn"><svg viewBox="0 0 512 512">
                        <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19
                         15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8
                          201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0
                           26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/>
                           </svg></a>
                    </li>
    
                </ul>
            </div>

            <div className=" rotate fixed w-1/3 h-1/2">
                <div className=" hello  text-green-500">Adamnapper007@gmail.com</div>
            </div>
        <div className="flex fixed inset-x-0 bottom-0 w-screen h-16 items-center">
            <div>
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium pl-5">
                    <li className="pl-5">
                    <NavLink to="/Home" className={(navData) => (navData.isActive ? 'active' : ' block uppercase tracking-wide text-sm text-gray-400 hover:text-green-500')}   >Home</NavLink>
                    </li>
                    <li className="pl-5">
                        <NavLink to="/About" className={(navData) => (navData.isActive ? 'active' : 'block uppercase tracking-wide text-sm text-gray-400 hover:text-green-500')}   >About</NavLink>
                    </li>
                    <li className="pl-5">
                    <NavLink to="/Work" className={(navData) => (navData.isActive ? 'active' : ' block uppercase tracking-wide text-sm text-gray-400 hover:text-green-500')}   >Work Experience</NavLink>
                    </li>
                    <li className="pl-5">
                    <NavLink to="/Projects" className={(navData) => (navData.isActive ? 'active' : 'block uppercase tracking-wide text-sm text-gray-400 hover:text-green-500')}   >Projects</NavLink>
                    </li>
                    <li className="pl-5">
                    <NavLink to="/Contact" className={(navData) => (navData.isActive ? 'active' : 'block uppercase tracking-wide text-sm text-gray-400 hover:text-green-500')}   >Contact</NavLink>
                    </li>
                    <p className="number text-white"></p>
                </ul>
            </div>
            <div className=" absolute inset-x-0 bottom-0 bg-green-600 w-screen h-0.5"/>
        </div>
    </div>
    );


}

export default Navbar;