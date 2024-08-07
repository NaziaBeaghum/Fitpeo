import React from 'react'
import './Mainbar.css'
import { FaShoppingBasket } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import data from './data'
import { FaStar } from "react-icons/fa";

const Mainbar = () => {
  const array1=[{img:<FaShoppingBasket />,total:"Total orders",number:75},
                  {img:<MdShoppingBag />,total:"Total dashboard",number:70},
                  {img:<MdShoppingBag />,total:"Total Cancelled",number:5},
                  {img:<FaFileInvoiceDollar />,total:"Total Revenue",number:'$12k'}
  ]
  return (
    <div className="mainbar_container">
      <p>Dashboard</p>
      <div className="grid_container">
       <div className='flexbox'>
        {array1.map((item)=>(<div><ul>
          <li className='img_bag'>{item.img}</li>
          <li className='item_total'>{item.total}</li>
          <li className='list_number'>{item.number}<span className='net_value roboto-light blue_color margin_left'>🔽3%</span></li>
          
        </ul></div>))}
       </div>
       <div className='net_profit'>
        <div className="flex_profit">
          <div className="item1">
            <ul>
              <li className='net_value roboto-light '>Net Profit</li>
              <li className='dollar_value roboto-bold'>$6759.25</li>
              <li className='net_value roboto-light blue_color'>🔽3%</li>
            </ul>
          </div>
          <div className="item2">
            <ul>
              <li> <img src="/loader.jpg" width="80px"/></li>
              <li> <p className='net_value roboto-light '>this loader gets time to load</p></li>
            </ul>
           
           
          </div>
        </div>
         
      </div>
       <div className='activity'>
       <div className="flex">
          <p>Activity</p>
          <button className='btn'>Weekly 🔽</button>
        </div>
        <img src="/activity.jpg" alt="" className='activity_img'/>
      </div>


       <div className='circle'>
        <div className="flex">
            <div className="flex__bars">
              <img src="circle1.jpg" alt="" className='circle_img '/>
              <p className='roboto-light'>Goals</p>
            </div>
            <div className="flex_item2"></div>
               <MdKeyboardArrowLeft  className='left_arrow'/>  
          </div>

          <div className="flex">
            <div className="flex__bars">
              <img src="circle2.jpg" alt="" className='circle_img '/>
              <p className='roboto-light'>Popular dishes</p>
            </div>
            <div className="flex_item2"></div>
               <MdKeyboardArrowLeft  className='left_arrow'/>  
          </div>

          <div className="flex">
            <div className="flex__bars">
              <img src="circle2.jpg" alt="" className='circle_img '/>
              <p className='roboto-light'>Menus</p>
            </div>
            <div className="flex_item2"></div>
               <MdKeyboardArrowLeft  className='left_arrow'/>  
          </div>
       </div>
         
       <div className='orders'>
        <p>Recent orders</p>
          <table>
            <tr>
              <th>Customer</th>
              <th>Orderno </th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
            <tr>
              <td><div className="flex__items">
                 <img src="/profilephoto.jpeg" alt="" className='profile_img'/>
                 <p style={{marginLeft:".5rem"}}>Wells forgo</p>
                </div></td>
              <td>123456</td>
              <td>$123.67</td>
              <td><button className='delivery_btn'>Delivered</button></td>
            </tr>

            <tr>
            <td><div className="flex__items">
                 <img src="/gent2profile.png" alt="" className='profile_img'/>
                 <p style={{marginLeft:".5rem"}}>Diana forgo</p>
                </div></td>
              <td>345678</td>
              <td>$45.867</td>
              <td><button className='cancel_btn'>Cancelled</button></td>
            </tr>

            <tr>
            <td><div className="flex__items">
                 <img src="/profilephoto.jpeg" alt="" className='profile_img'/>
                 <p style={{marginLeft:".5rem"}}>Cruise forgo</p>
                </div></td>
              <td>123456</td>
              <td>$345.9</td>
              <td><button className='cancel_btn'>Cancelled</button></td>
            </tr>

            <tr>
            <td><div className="flex__items">
                 <img src="/profilephoto.jpeg" alt="" className='profile_img'/>
                 <p style={{marginLeft:".5rem"}}>Davis Miago</p>
                </div></td>
              <td>123456</td>
              <td>$345.9</td>
              <td><button className='delivery_btn'>Delivered</button></td>
            </tr>

            <tr>
               <td><div className="flex__items">
                 <img src="/gent2profile.png" alt="" className='profile_img'/>
                 <p style={{marginLeft:".5rem"}}>John jerome</p>
                </div></td>
              <td>123456</td>
              <td>$345.9</td>
              <td><button className='delivery_btn'>Delivered</button></td>
            </tr>

            <tr>
              <td><div className="flex__items">
                 <img src="/profilephoto.jpeg" alt="" className='profile_img'/>
                 <p style={{marginLeft:".5rem"}}>Wells forgo</p>
                </div></td>
              <td>123456</td>
              <td>$345.9</td>
              <td><button className='delivery_btn'>Delivered</button></td>
            </tr>  

          </table>
      
       </div>
       <div className='feedback'>
        <p>Customer's Feedback</p>
        {data?.map((item)=>(<div className='feedback_items roboto-light'>
          <div className="flex__items">
          <img src={item.img} alt="" className='profile_img margin_top'/>
          <p style={{marginLeft:".5rem"}}>{item.name}</p>
          </div>
          <span className="rating">
            <FaStar  className='filled'/>
            <FaStar  className='filled'/>
            <FaStar  className='filled'/>
            <FaStar  className='filled'/>
            <FaStar  />  
          </span>
          <p className='feedback_para' >{item.Description}</p>
        </div>))}
       </div>
    </div>
    </div>
  )
}

export default Mainbar