import React from 'react'

const Contact = ({Mode}) => {
  return (
    <div style={Mode?{backgroundColor:"white",height:"100vh",color:"black"}:{backgroundColor:"black",height:"100vh",color:"white"}}>
      Contact page
      </div>
  )
}

export default Contact