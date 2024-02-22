import React from 'react'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import "./servicelinks.css"

const Links=[
   ,{path:"services",tittle:"Services"}
   ,{path:"industries",tittle:"Industries"}
   ,{path:"about",tittle:"About"}
   ,{path:"careers ",tittle:"Careers"}
   ,{path:"contact",tittle:"Contacts Us"}
   ,{path:"News_Blog",tittle:"New&blogs"}
]
export const ServiceLinks = () => {
  return (
     <div className='serviceLinks' >
         <h4>Quick_links</h4>
         {
          Links.map(({path,tittle})=>{
            return  <li key={v4()}><Link to={path}>{tittle}</Link></li>
          })
         }
     </div>
  )
}

