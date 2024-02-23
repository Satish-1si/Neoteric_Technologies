import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../About/About.js'
const HomeComponent=React.lazy(()=>import("../Home/Home.js"))
export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<React.Suspense fallback={<h6 style={{textAlign:"center"}}>loading...</h6>}>{<HomeComponent/>}</React.Suspense>}> </Route>
      <Route path="services" element={<h1>services</h1>}> </Route>
      <Route path="industries" element={<h1>industries</h1>}> </Route>
      <Route path="careers" element={<h1>careers</h1>}> </Route>
      <Route path="about" element={<About/>}> </Route>
      <Route path="contact" element={<h1>contact</h1>}> </Route>
      <Route path="News_Blog" element={<h1>News_Blog</h1>}> </Route>
    </Routes>

  )
}
