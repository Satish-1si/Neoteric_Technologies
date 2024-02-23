import React from 'react'
import "./Nav.css"
import { NavLink,Link} from 'react-router-dom';
import {v4} from "uuid"
import { useRecoilState } from 'recoil';
import {HandleBackgrond} from "../stateMagement/LightDarkMode.js"
import BlackLogo from "./images/Neoteric-Technology-Logo 1 1.svg"
export const Navbar=({Mode})=> {
  const [LightModeState,setLightModeState]=useRecoilState(HandleBackgrond);
  const navItems = [
    { id: 1, title: "Services",  path:"services"  },
    { id: 2, title: "Industries",  path:"industries"  },
    { id: 3, title: "Careers",  path:"careers"  },
    { id: 4, title: "About",  path:"about"  },
    { id: 5, title: "Contact",  path:"contact"  },
    { id: 6, title: "News & Blog",  path:"News_Blog"  }
  ];

  return (
    <>

      <header className="header" style={LightModeState?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}}>
        <nav className="navbar">
          <Link to="/">
          <img src={BlackLogo} alt="Company Logo" className="navbar-logo" />
          </Link>
          <ul className="nav-list">
            {
              navItems.map(({title,path})=> <li key={v4()}><NavLink to={path} >{title}</NavLink></li>)
            }
          </ul>
          <h1 onClick={()=>setLightModeState((currentState)=>!currentState)}>bg</h1>
        </nav>
      </header>
       
    </>
  );
}


