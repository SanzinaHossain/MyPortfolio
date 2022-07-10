import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
//import TypeAnimation from 'react-type-animation';
import TextTransition, { presets } from "react-text-transition";
const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
const TEXTS = [
  "Front End Developer",
  "MERN Stack Developer",
  "React Developer",
];
  return (
    <div class="d-flex p-12 pt-44">
      <motion.h1 
      whileHover={{color:'red'}}
      class="text-3xl"
      >Hello I'M</motion.h1>
      <h1 class="text-6xl text-orange-500 pt-2">Sanzina Hossain</h1>
      <p class="text-4xl text-white pt-4">I am a <span class="text-orange-500"><TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly }
        inline
      /></span></p>
      <p class="text-xl pt-5">I am from Bangladesh. I always like to design something new to cope up with the world. My new ideas show me, how to be professional and to much originative. Proper activity in a work is important. That's why I always try to give more attention to my work.</p>
      <motion.button class="mt-5  p-2 text-xl text-white border-2 rounded-full text-center hover: border-orange-500"
      whileHover={{scale:1.1}}
      ><a target="_blank" href="https://drive.google.com/file/d/1Ko5NG9LlDBGGOc30FX9bPOoia--Zvvtj/view">Download Resume</a></motion.button>
    </div>
  )
}

export default Home