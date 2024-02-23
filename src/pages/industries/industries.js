import React from 'react'

const Industries = ({Mode}) => {
  console.log(`industries page ${Mode}`)
  return (
    <div style={Mode?{backgroundColor:"white",height:"100vh",color:"black"}:{backgroundColor:"black",height:"100vh",color:"white"}}>
      Industries page
      </div>
  )
}

export default Industries