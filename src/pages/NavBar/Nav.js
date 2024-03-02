import React from "react";
import "./Nav.css";
import { NavLink, Link } from "react-router-dom";
import { v4 } from "uuid";
import { useState } from "react";
import TechnologyLogo from "../NavBar/images/Neoteric-Technology-Logo.svg";
import { HandleBackgrond } from "../stateMagement/LightDarkMode";
import { useRecoilState } from "recoil";
import LightMode from "./images/sun.svg"
import DarkMode from "./images/moon-stars.svg"
export const Navbar = ({Mode}) => {
  const [LightModeState,setLightModeState]=useRecoilState(HandleBackgrond);
  const navItems = [
    { id: 1, title: "Services", path: "services" },
    { id: 2, title: "Industries", path: "industries" },
    { id: 3, title: "Careers", path: "careers" },
    { id: 4, title: "About", path: "about" },
    { id: 5, title: "Contact", path: "contact" },
    { id: 6, title: "News & Blog", path: "News_Blog" },
  ];

  const [isChecked, setisChecked] = useState(true);
  const handleHamburger = () => {
    setisChecked(!isChecked);
  };
  const handleCheckboxChange = (e) => {
    setisChecked(!isChecked);
  };

  return (
    <>
      <header className="nav" style={Mode?{backgroundColor:"#454545",color:"black"}:{backgroundColor:"white",color:"black"}}>
        <input type="checkbox" id="nav-check" checked={!isChecked} onChange={handleCheckboxChange} />
        <div className="nav-header col-lg-3">
          <div className="nav-title">
            <Link to="/">
              <img
                src={TechnologyLogo}
                alt="Company Logo"
                className="navbar-logo"
              />
            </Link>
          </div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links col-lg-8">
          <ul>
            {navItems.map(({ title, path }) => (
              <li key={v4()} onClick={handleHamburger}>
                <NavLink to={path} activeClassName="active">
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div onClick={()=>setLightModeState(!LightModeState)}> <img src={LightModeState?DarkMode:LightMode}/></div>
      </header>
    </>
  );
};

// import React from 'react'
// import "./Nav.css"
// import { NavLink,Link} from 'react-router-dom';
// import {v4} from "uuid"
// import { useRecoilState } from 'recoil';
// import {HandleBackgrond} from "../stateMagement/LightDarkMode.js"
// import BlackLogo from "./images/Neoteric-Technology-Logo 1 1.svg"
// export const Navbar=({Mode})=> {
//   const [LightModeState,setLightModeState]=useRecoilState(HandleBackgrond);
//   console.log(LightModeState)
//   const navItems = [
//     { id: 1, title: "Services",  path:"services"  },
//     { id: 2, title: "Industries",  path:"industries"  },
//     { id: 3, title: "Careers",  path:"careers"  },
//     { id: 4, title: "About",  path:"about"  },
//     { id: 5, title: "Contact",  path:"contact"  },
//     { id: 6, title: "News & Blog",  path:"News_Blog"  }
//   ];
//   return (
//     <>
//       <header className="header" style={Mode?{backgroundColor:"grey",color:"black"}:{backgroundColor:"black",color:"white"}} >
//         <nav className="navbar">
//           <Link to="/">
//           <img src={BlackLogo} alt="Company Logo" className="navbar-logo" />
//           </Link>
//           <ul className="nav-list">
//             {
//               navItems.map(({title,path})=> <li key={v4()}><NavLink to={path} >{title}</NavLink></li>)
//             }
//           </ul>
//           <h1 onClick={()=>setLightModeState(!LightModeState)}>bg</h1>
//         </nav>
//       </header>
       
//     </>
//   );
// }