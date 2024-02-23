import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Industries from '../industries/industries.js'
import Careers from '../careers/careers.js'
import About from '../About/About.js'
import Contact from '../contact/contact.js'
import News_Blog  from "../News_blog/News_blog.js"
import Services from '../services/services.js'
const HomeComponent=React.lazy(()=>import("../Home/Home.js"))
export const Routers = ({Mode}) => {
  return (
    <Routes>
      <Route path="/" element={<React.Suspense fallback={<h1>Loading.....</h1>}><HomeComponent /></React.Suspense>}> </Route>
      <Route path="services" element={<Services Mode={Mode}/>}> </Route>
      <Route path="industries" element={<Industries Mode={Mode}/>}> </Route>
      <Route path="careers" element={<Careers Mode={Mode}/>}> </Route>
      <Route path="about" element={<About Mode={Mode}/>}> </Route>
      <Route path="contact" element={<Contact Mode={Mode}/>}> </Route>
      <Route path="News_Blog" element={<News_Blog Mode={Mode}/>}> </Route>
    </Routes>

  )
}
