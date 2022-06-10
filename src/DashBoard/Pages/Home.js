import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//import TypeAnimation from 'react-type-animation';
import TextTransition, { presets } from "react-text-transition";
const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
const TEXTS = [
  "Front End Developer",
  "MERN Stack Developer",
  "React Developer",
];
  return (
    <div class="d-flex p-12 pt-48">
      <h1 class="text-3xl">Hello I'M</h1>
      <h1 class="text-5xl text-orange-500 pt-2">Sanzina Hossain</h1>
      <p class="text-4xl text-white pt-4">I am a <span class="text-orange-500"><TextTransition
        text={ TEXTS[index % TEXTS.length] }
        springConfig={ presets.wobbly }
        inline
      /></span></p>
      <p class="text-xl pt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem eos ut, impedit, a non similique facilis tempora animi maxime sed esse rem amet repellat eaque aliquam, illum et quo veniam ullam illo numquam totam aspernatur? Optio, necessitatibus? Totam repudiandae aliquam dolore et nam exercitationem vitae cumque quas molestiae, atque veniam.</p>
      <button class="mt-5  p-2 text-xl text-white border-2 rounded-full text-center hover:bg-orange-500 hover:text-black border-orange-500"><Link to="/contact">Download Resume</Link></button>
    </div>
  )
}

export default Home