import React from 'react'
import { motion } from 'framer-motion'
const ProjectDetails = () => {
  return (
    <div class="pt-5">
    <motion.h1 
    className='text-4xl text-neutral text-center'
    initial={{y:-100}}
    animate={{color:'orange',y:5}}
    transition={{ duration: 1.5 }}>
 <span class="text-white">Project</span> Details</motion.h1>
 <div class="divider"></div>
 <div class="m-auto">
  <a href="" class=" btn-secondary text-white ">Live Site</a>
  <a href="">Live Site</a>
  <a href="">Live Site</a>
 </div>
 <div class="bg-orange-300 h-full w-4/6 m-auto mt-12">
  {/* carosul */}
    <div class="carousel w-full">
  <div id="item1" class="carousel-item w-full">
    <img src="https://i.ytimg.com/vi/ryUxrFUk6MY/maxresdefault.jpg" class="w-full" />
  </div> 
  <div id="item2" class="carousel-item w-full">
    <img src="https://cdn.pixabay.com/photo/2018/03/07/00/08/flower-3204966__340.jpg" class="w-full" />
  </div> 
  <div id="item3" class="carousel-item w-full">
    <img src="https://static.thehoneycombers.com/wp-content/uploads/sites/2/2022/02/same-day-flower-delivery-Singapore.png" class="w-full" />
  </div> 
  <div id="item4" class="carousel-item w-full">
    <img src="https://cdn.shopify.com/s/files/1/2102/6637/files/off-center-vivid-floral-bouquet-in-clear-vase.jpg?v=1611617363" class="w-full" />
  </div>
</div> 
<div class="flex justify-center w-full py-2 gap-2">
  <a href="#item1" class="btn btn-xs bg-black text-white hover:bg-black">1</a> 
  <a href="#item2" class="btn btn-xs  bg-black text-white hover:bg-black">2</a> 
  <a href="#item3" class="btn btn-xs  bg-black text-white hover:bg-black">3</a> 
  <a href="#item4" class="btn btn-xs  bg-black text-white hover:bg-black">4</a>
</div>
<div class="grid grid-cols-5 gap-4 p-5">
      <motion.div 
      whileHover={{scale:1.1,backgroundColor:'red'}}
      class="text-white bg-black rounded-full text-center">HTML</motion.div>
<motion.div 
whileHover={{scale:1.1,backgroundColor:'red'}}
class="text-white bg-black rounded-full text-center">CSS</motion.div>
<motion.div 
      whileHover={{scale:1.1,backgroundColor:'red'}}
      class="text-white bg-black rounded-full text-center">React Js</motion.div>
      <motion.div 
      whileHover={{scale:1.1,backgroundColor:'red'}}
      class="text-white bg-black rounded-full text-center">React Js</motion.div>
      <motion.div 
      whileHover={{scale:1.1,backgroundColor:'red'}}
      class="text-white bg-black rounded-full text-center">React Js</motion.div>
      <motion.div 
      whileHover={{scale:1.1,backgroundColor:'red'}}
      class="text-white bg-black rounded-full text-center">React Js</motion.div>
      <motion.div 
      whileHover={{scale:1.1,backgroundColor:'red'}}
      class="text-white bg-black rounded-full text-center">React Js</motion.div>
      <motion.div 
      whileHover={{scale:1.1,backgroundColor:'red'}}
      class="text-white bg-black rounded-full text-center">React Js</motion.div>
    </div>
    <div class=" p-5">
      <h1 class="text-red-900 text-2xl text-bold ">Projects Features:</h1>
      <ul 
      class="text-black">
        <motion.li whileHover={{scale:1.1,originX:0,color:'blue'}}
     transition={{type:'spring',stiffness:300}}>1) It's is a tools manufacture Web application
</motion.li>
<motion.li whileHover={{scale:1.1,originX:0,color:'blue'}}
     transition={{type:'spring',stiffness:300}}>2) Users authentication ensure by using Firebase in login and registration
</motion.li>
<motion.li whileHover={{scale:1.1,originX:0,color:'blue'}}
     transition={{type:'spring',stiffness:300}}>3) Users can purchase tools and manage their payment and orders.
</motion.li>
<motion.li whileHover={{scale:1.1,originX:0,color:'blue'}}
     transition={{type:'spring',stiffness:300}}>4) Admins can manage all users order and payments
</motion.li>
        
      </ul>
    </div>
    </div>
 </div>
  )
}

export default ProjectDetails