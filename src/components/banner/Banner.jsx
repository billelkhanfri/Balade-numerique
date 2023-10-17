import React from 'react'
import Logo from "../../assets/images/android-chrome-192x192.png";

import "./banner.css"

function Banner() {
  return (
    <> 
    <div className="banner-head">
        <h1>BALADE NUMÉRIQUE</h1>
    </div>
   <div className="banner-wrapper ">
    
     <img src={Logo} alt="image de Toulon" /> 
     <div className="banner-slogan">
     <p> Elle S'appelait Telo</p>
     </div>
   
   </div>
   </>
  )
}

export default Banner