import { motion } from 'framer-motion'
import React from 'react'
const Projects = () => {
  return (
    <div class="pt-5">
       <motion.h1 
       className='text-4xl text-neutral text-center'
       initial={{y:-100}}
       animate={{color:'orange',y:5}}
       transition={{ duration: 1.5 }}>
    <span class="text-white">My</span> Projects</motion.h1>
    <div class="divider"></div>
    <div class="grid lg:grid-cols-3 gap-4 grid-cols-1 lg:p-5 p-0 lg:pt-16">
         
    <div class="card w-80 bg-base-100 shadow-xl">
  <figure><img src="https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg" alt="Shoes" /></figure>
 
</div>

<div class="card w-80 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div class="card w-80 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    



  



</div>
    </div>
  )
}

export default Projects