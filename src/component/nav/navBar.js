
import { useEffect, useState } from 'react';
import './navBar.css'

const Navbar = () => {
      const [show, setShow] = useState()

      const backgroundColor = () =>{
        if(window.scrollY>100){
            setShow(true)
        }else{
            setShow(false)
        }
      }
     
      useEffect(()=>{
        window.addEventListener("scroll",backgroundColor)
    //  backgroundColor()
    console.log("nav")
      },[])
    return (
        <div className={`navbar ${show && "back-color"}`}>
         <div className="logo">Netflix</div>
         <button>Logout</button>
        </div>
    )
}
export default Navbar;