import {useState} from 'react'
import {AiFillCaretDown, AiFillCaretUp } from "react-icons/ai"
import "./collaps.css"

function Collapse({coup_coeur_title,
    coup_coeur_text,
    coup_coeur_title2,
    coup_coeur_text2,
    coup_coeur_title3,
    coup_coeur_text3,
    coup_coeur_text4,
    coup_coeur_title4,
    coup_coeur_title5,
    coup_coeur_text5}) {


  const [toggle, setToggle] = useState(true);


  return (
    <>
  
    <div className=' collapse-wrapper'>
    <div className='dropDownshowen' onClick={() => setToggle(!toggle)}>
      <h2 >{coup_coeur_title}</h2>
      <div>  
        { !toggle ?(<AiFillCaretDown/>) : (<AiFillCaretUp/>)} 
     </div>
   
    </div>

    {toggle && (
      < div className='contentWrapper'>
        <p>{coup_coeur_text}</p>
      </div>
    )}
  </div>
  
  </>
  )
}

export default Collapse