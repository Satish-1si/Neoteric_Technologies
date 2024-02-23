import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './pages/NavBar/Nav'
import { Routers } from './pages/Routes/router'
import { Footer } from './pages/Footer/footer'
import { HandleBackgrond } from './pages/stateMagement/LightDarkMode'
import { useRecoilState } from 'recoil'

export const App = () => {
  const [LightModeState,setLightModeState]=useRecoilState(HandleBackgrond);
  return (
    <BrowserRouter>
			<Navbar Mode={LightModeState}/>
			<Routers Mode={LightModeState}/>
			<Footer Mode={LightModeState}/>
	 </BrowserRouter>
   
   
  )
}

