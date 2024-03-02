import React from 'react'
import "./section_4.css"
import { v4 } from 'uuid'
import strategies from "../Home/Images/strategies.svg"
import engineering from "../Home/Images/engineering.svg"
import server from "../Home/Images/server.svg"
import dashboard from "../Home/Images/dashboard.svg"
import microchip from "../Home/Images/microchip.svg"
import cyber from "../Home/Images/cyber_security.svg"

const Imformation=[
    {
      logo:strategies ,
      Heading:"Strategy",
      text:"Crafting strategies tailored to your unique goals and challenges, we pave the path for your success through insightful planning and execution."
    },
    {
      logo:engineering  ,
      Heading:"Engineering",
      text:"Crafting strategies tailored to your unique goals and challenges, we pave the path for your success through insightful planning and execution."
    },
    {
      logo:server  ,
      Heading:"Cloud",
      text:"Crafting strategies tailored to your unique goals and challenges, we pave the path for your success through insightful planning and execution."
    },
    {
      logo:dashboard  ,
      Heading:"Data & Analytics",
      text:"Crafting strategies tailored to your unique goals and challenges, we pave the path for your success through insightful planning and execution."
    },
    {
      logo:microchip,
      Heading:"Artificial Intelligence",
      text:"Crafting strategies tailored to your unique goals and challenges, we pave the path for your success through insightful planning and execution."
    },
    {
      logo:cyber  ,
      Heading:"Cyber Security",
      text:"Crafting strategies tailored to your unique goals and challenges, we pave the path for your success through insightful planning and execution."
    },
   
    
]
export const Technologies = ({Mode}) => {
  return (
    <div className='Technologies_container'
    style={Mode?{backgroundColor:"black",color:"white"}:{backgroundColor:"white",color:"black"}}
    >
        <div className='Technologies_section'>
                <h1 className="Techno_heading">Our Core Services</h1>
                <div className='Techono_cards_container'>
                {
                  Imformation.map(({logo,Heading,text})=>{
                    return <div className='Techno_Card col-lg-3 col-md-4 col-sm-6 col-10' key={v4()}>
                                 <img src={logo} />
                                 <p className='Section4CardHeading'>{Heading}</p>
                                 <p className='Section4CardText'>{text}</p>
                             </div>
                  })
                }
                </div>
        </div>
    </div>
  )
}

