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
export const ServiceLinks = ({Mode}) => {
  return (
     <div className='serviceLinks col-lg-3 col-md-6 col-sm-12 col-12' >
         <footerheading>Quick_links</footerheading>
         {
          Links.map(({path,tittle})=>{
            return  <li key={v4()} ><Link to={path} style={Mode?{color:"white"}:{color:"black"}}>
              {tittle}
              </Link></li>
          })
         }
     </div>
  )
}

