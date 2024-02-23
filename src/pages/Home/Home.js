
import React from "react";
import "./Home.css"
import RightIcon from "./Images/arrow-circle-Right.png"
import LeftIcon from "./Images/arrow-circle-left.png"

import { useState } from "react";
import { PromoContent } from "./Section_1";
import { SolutionBanner } from "./section_2";
import { TechnologySolutions } from "./section_3";
import { Technologies } from "./section_4";
import { Contacts_Section } from "./section_5";
import { Clients } from "./section_6";
import { News_Blogs } from "./section_7";

const Images=[
    {
        Img_path:require("./Images/Component16.png")
        ,paragraph:"Unlocking Potential, Unleashing Innovation"
        
    },
    {
        Img_path:require("./Images/Component17.png")
        ,paragraph:"AI-Powered Solutions for a Smarter Tomorrow"
    },
    {
        Img_path:require("./Images/Component18.png")
        ,paragraph:"Empowering Businesses, Empowering You"
      
    },

]

const HeroSection=()=> {
  const [Image_count,setImage_count]=useState({count:0})
  const IncreaseTheImageCount=()=>{
      if(Image_count.count<Images.length-1){
        setImage_count(({count})=>({count:count+1}))
      } 
   }
   const DecrementTheImageCount=()=>{
    if(Image_count.count>0){
        setImage_count(({count})=>({count:count-1}))
      }
   }
  const Image_access=Image_count.count
  return (
     <section 
     className="section_container"
     style={{backgroundImage:`url(${Images[Image_access].Img_path})`}}
     >
    <div className="TextContainer">
         <h1>
            {Images[Image_access].paragraph}
         </h1>
        <div className="icons_container">
           <img src={LeftIcon} onClick={DecrementTheImageCount}/>
           <img src={RightIcon} onClick={IncreaseTheImageCount}/>
           <div className="pageNo">
              { <h6>01 / {Image_count.count+1}</h6>}
           </div>
        </div>
     </div>
     </section>
  );
}

const HomeSection=({Mode})=>{
      return(
                <div style={Mode?{backgroundColor:"black",color:"white"}:{backgroundColor:"black",color:"white"}}>
              <HeroSection />
              <PromoContent/>
              <SolutionBanner/>
              <TechnologySolutions/>
              <Technologies/>
              <Contacts_Section/>
              <Clients/>
              <News_Blogs/>
           </div>
      )
}
export default HomeSection