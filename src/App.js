import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './pages/NavBar/Nav'
import { Routers } from './pages/Routes/router'
import { Footer } from './pages/Footer/footer'
import { HandleBackgrond } from './pages/stateMagement/LightDarkMode'
import { useRecoilState } from 'recoil'
import { CopyRights } from './pages/CopyRights/copyright'
import ScrollToTop from './pages/Routes/ScrollToTop'
export const App = () => {
    const [LightModeState,setLightModeState]=useRecoilState(HandleBackgrond);
    console.log(LightModeState)
  return (
    <BrowserRouter>
			<Navbar Mode={LightModeState}/>
      <div className='nav-routes'>
      <ScrollToTop/>
			  <Routers Mode={LightModeState}/>
      </div>
			<Footer Mode={LightModeState}/>
      <CopyRights Mode={LightModeState} />
	 </BrowserRouter>
   
  )
}