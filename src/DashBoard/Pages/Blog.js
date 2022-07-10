import React from 'react'
import { motion } from 'framer-motion'
const Blog = () => {
  return (
    <div class="p-12 pt-3">
       <motion.h1 className='text-4xl text-neutral text-center'
       initial={{y:-100}}
       animate={{color:'orange',y:5}}
       transition={{ duration: 1.5 }}>
    <span class="text-white">About </span>Me</motion.h1>
    <div class="divider"></div>
      <div>
          <h1 class="text-orange-500 text-5xl">Personal Information</h1>
            <div class="pl-24 mt-5 text-2xl">
            {/* <ul class="steps steps-vertical">
               <li class="step step-neutral"><p>Name   : Sanzina Hossain</p></li>
               <li class="step step-neutral"><p>Age    : 23 years old</p></li>
               <li class="step step-neutral"> <p>Address: Saraipara Pahartoli Chittagong</p></li>
               <li class="step step-neutral"><p>Phone  : 01867623823</p></li>
               <li class="step step-neutral"><p>Email  : sanzina67shorna@gmail.com</p></li>
            </ul> */}
              <p>Name   : Sanzina Hossain</p>
              <p>Email  : sanzina67shorna@gmail.com</p>
              <button class="mt-5 mr-3 p-2 text-xl text-white border-2 rounded-full text-center hover:bg-orange-500 hover:text-black border-orange-500"><a target="_blank" href="https://drive.google.com/file/d/1Ko5NG9LlDBGGOc30FX9bPOoia--Zvvtj/view">Download Resume</a></button>
              <button class="mt-5 mr-4 p-2 text-xl text-white border-2 rounded-full text-center hover:bg-orange-500 hover:text-black border-orange-500"><a target="_blank" href="https://github.com/SanzinaHossain?tab=repositories">Github Link</a></button>
             <button class="mt-5 mr-4 p-2 text-xl text-white border-2 rounded-full text-center hover:bg-orange-500 hover:text-black border-orange-500"><a target="_blank" href="https://www.linkedin.com/in/sanzina-hossain-335909229/">Linkedin</a></button>
             <button class="mt-5 mr-4 p-2 text-xl text-white border-2 rounded-full text-center hover:bg-orange-500 hover:text-black border-orange-500"><a target="_blank" href="https://codeforces.com/profile/Sanzina_67">Codeforce</a></button>
            </div>
       </div>
       <div class="mt-7">
          <h1 class="text-orange-500 text-5xl">Education</h1>
            <div class="grid lg:grid-cols-2 gap-4 grid-cols-1">
            <motion.div class="pl-24 mt-5 text-2xl"
            >
              <motion.p class="text-3xl"
              whileHover={{scale:1.1,originX:0,color:'orange'}}
              transition={{type:'spring',stiffness:300}}
              >International Islamic University Chittagong</motion.p>
              <motion.p
              whileHover={{scale:1.1,originX:0,color:'orange'}}
              transition={{type:'spring',stiffness:300}}>BSC in Computer Science & Engineering</motion.p>
              <motion.p
              whileHover={{scale:1.1,originX:0,color:'orange'}}
              transition={{type:'spring',stiffness:300}}>2018-2022</motion.p>
            </motion.div>
            <motion.div class="pl-24 mt-5 text-2xl"
            >
              <motion.p class="text-3xl"
              whileHover={{scale:1.1,originX:0,color:'orange'}}
              transition={{type:'spring',stiffness:300}}
              >Government Women Collage Chittagong</motion.p>
              <motion.p
              whileHover={{scale:1.1,originX:0,color:'orange'}}
              transition={{type:'spring',stiffness:300}}>Higher Secondary</motion.p>
              <motion.p
              whileHover={{scale:1.1,originX:0,color:'orange'}}
              transition={{type:'spring',stiffness:300}}>Group:Science</motion.p>
              <motion.p
              whileHover={{scale:1.1,originX:0,color:'orange'}}
              transition={{type:'spring',stiffness:300}}>2015-2017</motion.p>
            </motion.div>
            </div>

       </div>
    </div>
  )
}

export default Blog