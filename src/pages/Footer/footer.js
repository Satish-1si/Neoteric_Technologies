import React from 'react'
import { ServiceLinks } from './serviceLinks'
import { SocialLinks } from './socialLinks'
import {LogoImf} from './LogoImf.js'
import "./footer.css"

export const Footer = ({Mode}) => {
  return (
    <div className='FooterContainer'
    style={Mode?{backgroundColor:"black"}:{backgroundColor:"white"}}
    >
       <div className='FooterContainerSection col-12 d-flex'>
        <LogoImf  Mode={Mode}/>
        <SocialLinks Mode={Mode}/>
        <ServiceLinks Mode={Mode}/>


       </div>
    
        
    </div>
  )
}
