import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashBoard = () => {
  return (
    <div class="">
    <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content bg-black">
    {/* <!-- Page content here --> */}
    <Outlet></Outlet>
  </div> 

  <div class="drawer-side bg-black-500">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 text-base-content ">
      {/* <!-- Sidebar content here --> */}
      <li class="hover:bg-teal-200 rounded-lg text-black border-white "><Link to="//dashboard">Home</Link></li>
          <li class="hover:bg-teal-200 rounded-lg text-black"><Link to="/projects">Projects</Link></li>
          <li class="hover:bg-teal-200 rounded-lg text-black"><Link to="/blogs">Blogs</Link></li>
           <li class="hover:bg-teal-200 rounded-lg text-black"><Link to="/contact">Contact Us</Link></li>
         
    </ul>
  
  </div>
</div>
    </div>
  )
}

export default DashBoard