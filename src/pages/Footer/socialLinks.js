import React from 'react'
import { v4 } from 'uuid'
import "./socialLinks.css"

const Links=[
   ,{path:"https://www.facebook.com/",tittle:"faceBook",img:require("./Images/facebook-svgrepo-com.png")}
   ,{path:"https://twitter.com/",tittle:"Twitter",img:require("./Images/twitter-svgrepo-com.png")}
   ,{path:"https://www.linkedin.com/",tittle:"linkedin",img:require("./Images/linkedin-svgrepo-com.png")}
   ,{path:"https://www.instagram.com/",tittle:"instagram",img:require("./Images/instagram-167-svgrepo-com.png")}
  
]
export const SocialLinks = () => {
  return (
     <div className='socialLinks'style={{display:"inline"}}>
         <h4 >Follow Us On</h4>
         {
          Links.map(({path,tittle,img})=>{
            return  <li key={v4()}>
                <a href={path}>
                    <img src={img}/>
                    {tittle}
                    </a>
                    </li>
          })
         }
     </div>
  )
}

