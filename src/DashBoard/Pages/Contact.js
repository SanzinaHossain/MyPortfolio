import React from 'react'
import { BiMailSend} from "react-icons/bi";
import {MdOutlineMarkEmailUnread,MdLocationOn } from "react-icons/md";
import {BsFillTelephoneFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div class="p-9">
       <h1 className='text-4xl text-neutral text-center'>
    <span class="text-white">Contact</span> With Me</h1>
    <div class="divider"></div>
    <div class="hero bg-base-200 mt-16">
  <div class="hero-content flex-col lg:flex-row">
    <div class="text-center lg:text-left">
      <h1 class="text-4xl font-bold text-orange-500 mx-2">Contact Info</h1>
      <h3 class="mt-4 flex justify-items-center items-center text-2xl mb-2"><MdOutlineMarkEmailUnread class="text-2xl mx-2"></MdOutlineMarkEmailUnread> <span class="mb-2">sanzina67shorna@gmail.com</span></h3>
      <h3 class="mt-4 flex justify-items-center items-center text-2xl mb-2"><BsFillTelephoneFill class="text-2xl mx-2"></BsFillTelephoneFill> <span class="mb-2">01867623823</span></h3>
      <h3 class="mt-4 flex justify-items-center items-center text-2xl mb-2"><MdLocationOn class="text-2xl mx-2"></MdLocationOn> <span class="mb-2">Pahartoli, Chittagong</span></h3>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-orange-700 lg:mx-24 mx-2">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text text-black text-lg">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered border-orange-500 text-black" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text text-black text-lg">Your Message</span>
          </label>
          <textarea class="textarea textarea-bordered border-orange-500 text-black" placeholder="White Here....."></textarea>
        </div>
        <div class="form-control mt-6">
          <button class="btn  btn-secondary bold text-lg hover:btn-orange-900">Submit<span ><BiMailSend class="text-2xl mx-1"> </BiMailSend></span></button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Contact