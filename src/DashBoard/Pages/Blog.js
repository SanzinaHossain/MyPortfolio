import React from 'react'

const Blog = () => {
  return (
    <div class="p-12">
      <div>
          <h1 class="text-orange-500 text-5xl">Personal Information</h1>
            <div class="pl-24 mt-5 text-2xl">
              <p>Name   : Sanzina Hossain</p>
              <p>Age    : 23 years old</p>
              <p>Address: Saraipara Pahartoli Chittagong</p>
              <p>Phone  : 01867623823</p>
              <p>Email  : sanzina67shorna@gmail.com</p>
              <button class="mt-3 mr-3 p-2 text-xl text-white border-2 rounded-full text-center hover:bg-orange-500 hover:text-black border-orange-500"><a target="_blank" href="https://drive.google.com/file/d/1Ko5NG9LlDBGGOc30FX9bPOoia--Zvvtj/view">Download Resume</a></button>
              <button class="mt-3 mr-4 p-2 text-xl text-white border-2 rounded-full text-center hover:bg-orange-500 hover:text-black border-orange-500"><a target="_blank" href="https://github.com/SanzinaHossain?tab=repositories">Github Link</a></button>
             <button class="mt-3 mr-4 p-2 text-xl text-white border-2 rounded-full text-center hover:bg-orange-500 hover:text-black border-orange-500"><a target="_blank" href="https://www.linkedin.com/in/sanzina-hossain-335909229/">Linkedin</a></button>
             <button class="mt-3 mr-4 p-2 text-xl text-white border-2 rounded-full text-center hover:bg-orange-500 hover:text-black border-orange-500"><a target="_blank" href="https://codeforces.com/profile/Sanzina_67">Codeforce</a></button>
            </div>
       </div>
       <div class="mt-7">
          <h1 class="text-orange-500 text-5xl">Education</h1>
            <div class="pl-24 mt-5 text-2xl">
              <p class="text-3xl">International Islamic University Chittagong</p>
              <p>BSC in Computer Science & Engineering</p>
              <p>2018-2022</p>
            </div>
       </div>
    </div>
  )
}

export default Blog