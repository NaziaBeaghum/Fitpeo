import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Sidebar from './Components/Sidebar'
import Mainbar from './Components/Mainbar'

const App = () => {
  return (
    <div className="app_container"> 
        <Navbar/>

      <div className="flex_container">
      <Sidebar/>
      <Mainbar/>
      </div>
        
         
      
       
    </div>
  )
}

export default App