import React , {useState} from 'react'
import "./thumb.css"
import  Liberté from "../../assets/images/place-liberte.jpg"
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"



function Thumb() {
    const[toggle, setToggle] =  useState(false)

     const handleToggle = () =>{
        setToggle(!toggle)
        console.log(toggle)
     }
  return (
   <div className='thumbs-wrapper container'>
    
    <div className='thumb'>
   
        <div className="wrapper">  
       {
        !toggle ? (  <AiOutlineHeart className="fav-icon" onClick={handleToggle}/>) : (
            (  <AiFillHeart   className="fav-icon fill" onClick={handleToggle}/>)

        )
       }
       
        <img  className =" thum-img"src= {Liberté} alt="" />
        </div>
        <div className='text-wrapper'>
           
        <h2>Place de la Liberté</h2>
        <p> Coup de coeur : Diagonale, Boulevard de Strasbourg, Cinéma Le Royal</p>
        </div>

    </div>
      
    <div className='thumb'>
   
        <div className="wrapper">  
       {
        !toggle ? (  <AiOutlineHeart className="fav-icon" onClick={handleToggle}/>) : (
            (  <AiFillHeart   className="fav-icon fill" onClick={handleToggle}/>)

        )
       }
        <img  className =" thum-img"src= {Liberté} alt="" />
        </div>
        <div className='text-wrapper'>
           
        <h2>Place de la Liberté</h2>
        <p> Coup de coeur : Diagonale, Boulevard de Strasbourg, Cinéma Le Royal</p>
        </div>
        
    </div>
    <div className='thumb'>
   
   <div className="wrapper">  
  {
   !toggle ? (  <AiOutlineHeart className="fav-icon" onClick={handleToggle}/>) : (
       (  <AiFillHeart   className="fav-icon fill" onClick={handleToggle}/>)

   )
  }
   <img  className =" thum-img"src= {Liberté} alt="" />
   </div>
   <div className='text-wrapper'>
      
   <h2>Place de la Liberté</h2>
   <p> Coup de coeur : Diagonale, Boulevard de Strasbourg, Cinéma Le Royal</p>
   </div>
   
</div>
<div className='thumb'>
   
   <div className="wrapper">  
  {
   !toggle ? (  <AiOutlineHeart className="fav-icon" onClick={handleToggle}/>) : (
       (  <AiFillHeart   className="fav-icon fill" onClick={handleToggle}/>)

   )
  }
   <img  className =" thum-img"src= {Liberté} alt="" />
   </div>
   <div className='text-wrapper'>
      
   <h2>Place de la Liberté</h2>
   <p> Coup de coeur : Diagonale, Boulevard de Strasbourg, Cinéma Le Royal</p>
   </div>
   
</div>
   
   

    
   </div>
  )
}

export default Thumb