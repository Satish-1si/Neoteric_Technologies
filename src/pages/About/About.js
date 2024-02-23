import React from 'react'

const About = ({Mode}) => {
  console.log(Mode)
  return (
    <div style={Mode?{backgroundColor:"white",height:"100vh",color:"black"}:{backgroundColor:"black",height:"100vh",color:"white"}}>
       <h1>About</h1>
    </div>
  )
}

export default About