import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import pic from "../images/Banner/my.png"
import "../DashBoard/DashBoard.css"
const DashBoard = () => {
  return (
      <div class="">
    <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content bg-black">
   <Outlet></Outlet>
  </div> 

  <div class="drawer-side lg:bg-secondary bg-green-500">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="p-4 overflow-y-auto w-80  mt-5">
        <li><img class="ml-16 border-4 border-orange-500 rounded-full" src={pic} alt=""/></li>
        <li class="text-center text-3xl text-orange-600 pt-2 font-bold ">Sanzina Hossain</li>
        <li class="text-center text-2xl text-white pt-2">Front End Developer</li>
        <li class=" mt-7 p-2 text-xl text-white  border-4 rounded-full border-primary text-center bg-primary hover:bg-orange-500 hover:border-orange-500"><Link to="/">Home</Link></li>
        <li class=" p-2 text-xl text-white mt-4  border-4 rounded-full border-primary text-center bg-primary hover:bg-orange-500 hover:border-orange-500"><Link to="/about">About Me</Link></li>
        <li class=" p-2 text-xl text-white mt-4  border-4 rounded-full border-primary text-center bg-primary hover:bg-orange-500 hover:border-orange-500"><Link to="/">My Skills</Link></li>
        <li class=" p-2 text-xl text-white mt-4  border-4 rounded-full border-primary text-center bg-primary hover:bg-orange-500 hover:border-orange-500"><Link to="/projects">Projects</Link></li>
        <li class=" p-2 text-xl text-white mt-4  border-4 rounded-full border-primary text-center bg-primary hover:bg-orange-500 hover:border-orange-500"><Link to="/contact">Contact Me</Link></li>
         
    </ul>
  
  </div>
</div>
    </div>
  )
}

export default DashBoard