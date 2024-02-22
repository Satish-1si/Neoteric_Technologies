import React from 'react'
import "./section_4.css"
import { v4 } from 'uuid'
const Imformation=[
    {
      logo:require("./Images/strategies.png")  ,
      Heading:"Strategy",
      text:"Crafting strategies tailored to your unique goals and challenges, we pave the path for your success through insightful planning and execution."
    },
    {
      logo:require("./Images/engineering.png")  ,
      Heading:"Engineering",
      text:"Crafting strategies tailored to your unique goals and challenges, we pave the path for your success through insightful planning and execution."
    },
    {
      logo:require("./Images/server.png")  ,
      Heading:"Cloud",
      text:"Crafting strategies tailored to your unique goals and challenges, we pave the path for your success through insightful planning and execution."
    },
    {
      logo:require("./Images/Group.png")  ,
      Heading:"Data & Analytics",
      text:"Crafting strategies tailored to your unique goals and challenges, we pave the path for your success through insightful planning and execution."
    },
    {
      logo:require("./Images/microchip.png")  ,
      Heading:"Artificial Intelligence",
      text:"Crafting strategies tailored to your unique goals and challenges, we pave the path for your success through insightful planning and execution."
    },
    {
      logo:require("./Images/cyber-security.png")  ,
      Heading:"Cyber Security",
      text:"Crafting strategies tailored to your unique goals and challenges, we pave the path for your success through insightful planning and execution."
    },
   
    
]
export const Technologies = () => {
  return (
    <div className='Technologies_container'>
        <div className='Technologies_section'>
                <h1 className="Techno_heading">Our Core Services</h1>
                <div className='Techono_cards_container'>
                {
                  Imformation.map(({logo,Heading,text})=>{
                    return <div className='Techno_Card' key={v4()}>
                                 <img src={logo} />
                                 <h2>{Heading}</h2>
                                 <p>{text}</p>
                             </div>
                  })
                }
                </div>
        </div>
    </div>
  )
}

