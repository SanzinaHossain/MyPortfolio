import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div class="d-flex p-12 pt-48">
      <h1 class="text-3xl">Hello I'M</h1>
      <h1 class="text-4xl text-orange-500 pt-2">Sanzina Hossain</h1>
      <h1 class="text-5xl text-white pt-2">I am a Front End Developer</h1>
      <p class="text-xl pt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem eos ut, impedit, a non similique facilis tempora animi maxime sed esse rem amet repellat eaque aliquam, illum et quo veniam ullam illo numquam totam aspernatur? Optio, necessitatibus? Totam repudiandae aliquam dolore et nam exercitationem vitae cumque quas molestiae, atque veniam.</p>
      <button class="mt-5  p-2 text-xl text-white mt-4  border-4 rounded-full border-primary text-center bg-orange-500 border-orange-500"><Link to="/contact">Download Resume</Link></button>
    </div>
  )
}

export default Home