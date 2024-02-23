import React from 'react'
import { ServiceLinks } from './serviceLinks'
import { SocialLinks } from './socialLinks'
import {LogoImf} from './LogoImf.js'
import "./footer.css"

export const Footer = ({Mode}) => {
  return (
    <div className='FooterContainer' style={Mode?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}}>
       <div className='FooterContainerSection'>
         <LogoImf/>
         <SocialLinks/>
         <ServiceLinks/>
       </div>
        
    </div>
  )
}
