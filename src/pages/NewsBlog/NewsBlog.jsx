import React from 'react'
import './NewsBlog.css'
import LatestArticles from './LatestArticles'
import OpinionPieces from './OpinionPieces'
import StayConnected from './StayConnected'

export default function NewsBlog({Mode}) {
  return (
    <div className='fluid-container' style={Mode?{backgroundColor:"white",color:"black"}:{backgroundColor:"black",color:"white"}}>
       <div className='container'>
        <div className='row'>
          <h1 className='newsBlog-title mb-3'>News & Blog</h1>
          <p className='newsBlog-para mb-3 text-primary'>Stay Informed, Stay Inspired</p>
          <p className='newsBlog-para-1'>Welcome to the Neoteric Technologies News and Blog section, your go-to destination for the latest insights, trends, and updates in the world of technology, business strategy, and digital innovation. Here, you'll find a treasure trove of articles, opinion pieces, case studies, and more, curated to keep you informed, inspired, and ahead of the curve. Dive in and discover a wealth of knowledge that will empower you to drive success in today's fast-paced world.</p>
        </div>
       </div>
       <LatestArticles/>
       <OpinionPieces/>
       <StayConnected/>
    </div>
  )
}

