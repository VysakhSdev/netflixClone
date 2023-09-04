import './Nav.css'
import React,{ useState,  } from 'react';


function Nav() {
  const [show, setShow] = useState(false)
window.addEventListener('scroll',()=>{
  if(window.scrollY>450){
    setShow(true)
   } else setShow (false)
})
console.log(show);
  return (
    <div className={`nav ${show && "nav_black"}`} >
      <img src="https://i.postimg.cc/KcDSB8Wf/netflix-logo-png-large.png"
      alt='netflix logo'/>
    </div>
  )
}

export default Nav