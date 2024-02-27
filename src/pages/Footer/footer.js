import React from 'react'
import { ServiceLinks } from './serviceLinks'
import { SocialLinks } from './socialLinks'
import {LogoImf} from './LogoImf.js'
import "./footer.css"

export const Footer = () => {
  return (
    <div className='FooterContainer'>
       <div className='FooterContainerSection'>
        <LogoImf/>
        <SocialLinks/>
        <ServiceLinks/>

       </div>
        
    </div>
  )
}
