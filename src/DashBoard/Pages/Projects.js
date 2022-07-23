import { motion } from 'framer-motion'
import React from 'react'
import "../Pages/Projects.css";
import pic1 from "../../images/Projects/index.PNG"
import { useNavigate } from 'react-router-dom';
const Projects = () => {
  const navigate=useNavigate();
  const projectdetail=()=>{
     navigate('/projectDetails');
  }
  return (
    <div class="pt-5">
       <motion.h1 
       className='text-4xl text-neutral text-center'
       initial={{y:-100}}
       animate={{color:'orange',y:5}}
       transition={{ duration: 1.5 }}>
    <span class="text-white">My</span> Projects</motion.h1>
    <div class="divider"></div>
    <div class="grid lg:grid-cols-3 gap-4 grid-cols-1 lg:p-5 p-12 lg:pt-16">
         
    <div class="flip-card ">
          <div class="flip-card-inner ">
            <div class="flip-card-front ">
                <img class="image" src={pic1} alt="Shoes" />
            </div>
            <div class="flip-card-back text-black text-center  bg-orange-600 pt-24">
                <h1 class='text-3xl'>Tools & Manufacturing Website</h1>
                <p class="text-xl pt-3">Full Stack Website</p>
                <button class="btn btn-secondary mt-5" onClick={()=>projectdetail()}>Details</button>
            </div>
          </div>
    </div>
    <div class="flip-card ">
          <div class="flip-card-inner ">
            <div class="flip-card-front ">
                <img class="image" src={pic1} alt="Shoes" />
            </div>
            <div class="flip-card-back text-black text-center  bg-orange-600 pt-24">
                <h1 class='text-3xl'>Tools & Manufacturing Website</h1>
                <p class="text-xl pt-3">Full Stack Website</p>
                <button class="btn btn-secondary mt-5">Details</button>
            </div>
          </div>
    </div>
    <div class="flip-card ">
          <div class="flip-card-inner ">
            <div class="flip-card-front ">
                <img class="image" src={pic1} alt="Shoes" />
            </div>
            <div class="flip-card-back text-black text-center  bg-orange-600 pt-24">
                <h1 class='text-3xl'>Tools & Manufacturing Website</h1>
                <p class="text-xl pt-3">Full Stack Website</p>
                <button class="btn btn-secondary mt-5">Details</button>
            </div>
          </div>
    </div>
</div>
    </div>
  )
}

export default Projects