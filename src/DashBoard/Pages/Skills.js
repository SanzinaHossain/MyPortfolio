import React from 'react'
import { motion } from 'framer-motion'
const Skills = () => {
  return (
    <div class="p-5 px-10">
       <motion.h1 className='text-4xl text-neutral text-center'
        initial={{y:-100}}
        animate={{color:'orange',y:5}}
        transition={{ duration: 1.5 }}>
    <span class="text-white">My</span> Skills</motion.h1>
    <div class="divider"></div>
    <div class="avatar lg:mt-12 mt-9 grid lg:grid-cols-5 gap-9 grid-cols-2">
    <motion.div class="w-28 rounded-full ring ring-orange-500  transform hover:scale-125 "
    initial={{y:-300}}
    animate={{y:5}}
    transition={{ delay:1.5 ,duration: 1.5 }}
    >
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREcfuDO_znkiKBULT2zBsqy-z1b8NJcKvC8MofTXQc1JSSKqMuN3HRDEDP-G9nSVRuaVw&usqp=CAU" />
  </motion.div>
  <motion.div class="w-28 rounded-full border-orange-500 border-4 transform hover:scale-125"
  initial={{y:-300}}
  animate={{y:5}}
  transition={{ delay:3,duration:1.5  }}
  >
    <img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/02/firebase-logo-icon.png?fit=1200%2C600&ssl=1" />
  </motion.div>
  <motion.div class="w-28 rounded-full ring ring-orange-500 hover:scale-125"
  initial={{y:-300}}
  animate={{y:5}}
  transition={{ delay:4.5,duration:1.5  }}
  >
    <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-css-file-document-icon-png-image_4193116.jpg" />
  </motion.div>
  <motion.div class="w-28 rounded-full border-orange-500 border-4 transform hover:scale-125"
  initial={{y:-300}}
  animate={{y:5}}
  transition={{ delay:6,duration:1.5  }}>
    <img src="https://icons.getbootstrap.com/assets/img/icons-hero.png" />
  </motion.div>
  <motion.div class="w-28 rounded-full border-orange-500 border-4 transform hover:scale-125"
  initial={{y:-300}}
  animate={{y:5}}
  transition={{ delay:7.5,duration:1.5  }}>
    <img src="https://img.freepik.com/free-vector/js-letter-logo-design-black-background-initial-monogram-letter-js-logo-design-vector-template_634196-1198.jpg?w=2000" />
  </motion.div>
  <motion.div class="w-28 rounded-full border-orange-500 border-4 transform hover:scale-125"
  initial={{y:600}}
  animate={{y:5}}
  transition={{ delay:1.5,duration:1.5  }}>
    <img src="https://cdn1.epicgames.com/ue/product/Screenshot/Slide1.PNG-1920x1080-160df0b6db5b5e9131397f6dbe8289d2.jpg?resize=1&w=1920" />
  </motion.div>
  <motion.div class="w-28 rounded-full border-orange-500 border-4 transform hover:scale-125"
  initial={{y:600}}
  animate={{y:5}}
  transition={{ delay:3,duration:1.5  }}>
    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--3zWuwYa3--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk5j1m7oala1p.png" />
  </motion.div>
  <motion.div class="w-28 rounded-full border-orange-500 border-4 transform hover:scale-125"
  initial={{y:600}}
  animate={{y:5}}
  transition={{ delay:4.5,duration:1.5 }}>
    <img src="https://d6f6d0kpz0gyr.cloudfront.net/uploads/images/_1200x630_crop_center-center_82_none/tailwind-thumb.jpg?mtime=1609771799" />
  </motion.div>
  <motion.div class="w-28 rounded-full border-orange-500 border-4 transform hover:scale-125"
  initial={{y:600}}
  animate={{y:5}}
  transition={{ delay:6,duration:1.5 }}
  >
    <img src="https://icon-library.com/images/node-js-icon/node-js-icon-2.jpg" />
  </motion.div>
  <motion.div class="w-28 rounded-full border-orange-500 border-4"
  initial={{y:600}}
  whileHover={{scale:1.5}}
  animate={{y:5}}
  transition={{ delay:7.5,duration:1.5}}>
    <img src="https://reactrouter.com/twitterimage.jpg" />
  </motion.div>
</div>
    </div>
  )
}

export default Skills