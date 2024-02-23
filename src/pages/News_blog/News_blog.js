import React from 'react'

const News_Blog = ({Mode}) => {
  return (
    <div style={Mode?{backgroundColor:"white",height:"100vh",color:"black"}:{backgroundColor:"black",height:"100vh",color:"white"}}>
      News_Blog page
      </div>
  )
}

export default News_Blog