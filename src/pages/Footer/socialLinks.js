import React from 'react'
import { v4 } from 'uuid'
import "./socialLinks.css"

const Links=[
   ,{path:"https://www.facebook.com/",tittle:"Facebook",img:require("./Images/facebook-svgrepo-com.png")}
   ,{path:"https://twitter.com/",tittle:"Twitter",img:require("./Images/twitter-svgrepo-com.png")}
   ,{path:"https://www.linkedin.com/",tittle:"linkedin",img:require("./Images/linkedin-svgrepo-com.png")}
   ,{path:"https://www.instagram.com/",tittle:"Instagram",img:require("./Images/instagram-167-svgrepo-com.png")}
  
]
export const SocialLinks = ({Mode}) => {
  return (
     <div className='socialLinks col-lg-3 col-md-6 col-sm-12 col-12' >
         <footerheading >Follow Us On</footerheading>
         {
          Links.map(({path,tittle,img})=>{
            return  <li key={v4()}>
                    <a href={path} style={Mode?{color:"white"}:{color:"black"}}>
                    <img src={img}/>
                    {tittle}
                    </a>
                    </li>
          })
         }
     </div>
  )
}

