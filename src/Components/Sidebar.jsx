import React from 'react'
import './Sidebar.css'
import { IoMdHome } from "react-icons/io";
import { BsFileBarGraph } from "react-icons/bs";
import { PiBatteryVerticalEmpty } from "react-icons/pi";
import { PiBatteryLowLight } from "react-icons/pi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiPowerButton } from "react-icons/gi";


const Sidebar = () => {
  return (
    <div className="new_container">
    <div className="sidebar_container"> 
        <span><IoMdHome  className='home_icon'/></span>
        <span><BsFileBarGraph  className='graph_icon'/></span>
        <span><PiBatteryVerticalEmpty className='battery_icon' /></span>
        <span><PiBatteryLowLight className='battery_horizon' /></span>
        <span><MdOutlineShoppingBag  className='shooping_icon'/></span>
    </div>
    {/* <GiPowerButton  className='on_btn'/> */}
    </div>
  )
}

export default Sidebar