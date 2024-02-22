import React from 'react'
import "./Nav.css"
import { NavLink,Link} from 'react-router-dom';
import {v4} from "uuid"
export const Navbar=()=> {
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
      <header className="header">
        <nav className="navbar">
          <Link to="/">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f18c2813b583dc509bf69e8521b5926c4c9b74385d988ed7cb045a71458845e?apiKey=51553a7002134689b5fc60911a6e889" alt="Company Logo" className="navbar-logo" />
          </Link>
          <ul className="nav-list">
            {
              navItems.map(({title,path})=> <li key={v4()}><NavLink to={path} activeClassName="active">{title}</NavLink></li>)
            }
          </ul>
        </nav>
      </header>
       
    </>
  );
}


