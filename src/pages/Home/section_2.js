import "./section_2.css"

export const SolutionBanner=()=> {
  return (
    <div className="GradientContainer" style={{backgroundImage:`url(${require("./Images/GradientFrame.png")})`}}>
           <div className="Sol_Banner_TextContainer">
                   <h1 className="SolutionBanner_Heading">
                      Your challenges, our commitment to finding solutions
                   </h1>
           </div>
    </div>
  );
}