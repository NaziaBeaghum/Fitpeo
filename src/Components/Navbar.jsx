import React from 'react'
import "./Navbar.css"
import { CiMail } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from 'react';
import { CiBellOn } from "react-icons/ci";
import { IoFlowerOutline } from "react-icons/io5";
import { IoLogoFigma } from "react-icons/io5";

const Navbar = () => {
   const[toggle,setToggle]=useState(false)
   
   const handletoggle=()=>{
    setToggle(!toggle)
    console.log(toggle)
   }
   
  return (
    <div className="container">
      <IoLogoFigma className='logo_img' />
    <div className="navbar_container">
    
            <div className="search_box">
                <IoIosSearch  className='search_icon'/>
                <input type="text" placeholder='Search'/>
           </div>
        
         
        <div className={toggle?"flex_item2":"flexitem2_none"}>
            <span><CiMail className='mail_icon' /> </span>
            <span><IoFlowerOutline  className='flower_icon' /></span>
            <span><CiBellOn className='bell_icon' /></span>
            <span><img src="/profilephoto.jpeg" alt="" className='profile_img'/></span>

        </div>
        </div>     

        <div className="hamburger_menu"  >
         <IoMenuOutline  className='menu' onClick={handletoggle}/>
         </div>   
         
    
  </div>
  )
}

export default Navbar