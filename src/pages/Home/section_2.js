import "./section_2.css"

export const SolutionBanner=({Mode})=> {
  return (
    <div className="GradientContainer"
    style={Mode?{backgroundColor:"white",color:"black"}:{backgroundColor:"black",color:"white"}}

    >
           <div className="Sol_Banner_TextContainer">
                   <p className="SolutionBanner_Heading">
                      Your challenges, our commitment to finding solutions
                   </p>
           </div>
    </div>
  );
}