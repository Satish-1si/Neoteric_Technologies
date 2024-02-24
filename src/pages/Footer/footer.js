import React from 'react'
import { ServiceLinks } from './serviceLinks'
import { SocialLinks } from './socialLinks'
import {LogoImf} from './LogoImf.js'
import "./footer.css"

export const Footer = ({Mode}) => {
  return (
    <div className='FooterContainer' style={Mode?{backgroundColor:"white",color:"black"}:{backgroundColor:"black",color:"white"}}>
       <div className='FooterContainerSection'>
         <LogoImf/>
         <SocialLinks/>
         <ServiceLinks/>
       </div>
        
    </div>
  )
}
