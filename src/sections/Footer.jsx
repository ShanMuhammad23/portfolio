import { FaArrowCircleLeft, FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaCopyright } from "react-icons/fa"
import { services } from "../constants"
import { FaMailchimp } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa"
import { motion } from "framer-motion"
import { FaArrowAltCircleRight } from "react-icons/fa"
import { FaGear } from "react-icons/fa6"

const Footer = () => {
  return (
  <motion.footer 
  initial={{ opacity: 0,x:-100 }}
  whileInView={{ opacity: 1 ,x:0}}
  transition={{duration:0.5,delay:0}}
  className="flex flex-col  gap-4 p-6 mt-12 bg-gray-300 bg-opacity-5">
    <div className="flex justify-between gap-2   flex-col sm:flex-row ">
        <div className="flex flex-col gap-4 py-3 justify-between border-b-2 sm:border-0 sm:w-2/6"> <h1 className="text-2xl text-violet-500 text-bold">Shan Muhammad</h1>
        <p className="text-xl text-gray-200 sm:w-2/3 leading-8">To Explore More about web development! <br />Connect Me On Social World </p>
        <div className="flex gap-3 items-center text-white">
           <a href="facebook.com/Shanijoiya2374" target="_blank"> <FaFacebook  className="text-blue-700  h-[40px] w-[40px] rounded-xl cursor-pointer"/></a>
          <a href="https://www.linkedin.com/in/shan-muhammad-joiya/" target="blank"> <FaLinkedin  className="text-blue-500   h-[40px] w-[40px] rounded-xl cursor-pointer"/></a>
           <a href="https://github.com/ShanMuhammad23" target="blank"> <FaGithub  className="bg-black text-white  h-[40px] w-[40px] rounded-xl cursor-pointer"/></a>
            <a href="https://www.instagram.com/shani_developer/" target="_blank"><FaInstagram className="text-red-700 bg-white  h-[40px] w-[40px] rounded-xl cursor-pointer" /></a>
        </div></div>
       <div className="flex flex-col gap-2 border-b-2 py-3 sm:border-0 ">
        <h1 className="text-2xl text-violet-500 text-bold">Services</h1>
        {services.map((service)=>(
          <div className="flex items-center gap-3 mt-2 hover:translate-x-2" key={service.title}><FaGear className="text-white"/>  <p className="text-gray-400 text-xl ">{service.title}</p></div>
        ))}
       </div>
       <div className="flex flex-col gap-4">
        <h1 className="text-2xl text-violet-500 text-bold">Contact Me</h1>
        <div className="flex gap-2 items-center">
            <FaTelegram className="text-blue-400   h-[40px] w-[40px] rounded-xl"/> <h2 className="text-gray-300 text-xl">shanisitedeveloper@gmail.com</h2>
        </div>
        <div className="flex gap-2  items-center">
            <FaWhatsapp className="text-green-500  h-[40px] w-[40px] rounded-xl"/> <h2 className="text-gray-300 text-xl">+923219720819</h2>
        </div>
        <div className="flex gap-2  items-center">
            <FaLinkedin className="text-sky-500 h-[40px] w-[40px] rounded-xl" /> <h2 className="text-gray-300 text-xl">@shan-muhammad-joiya </h2>
        </div>
       </div>
    </div>
    <div className="flex justify-center gap-5 items-center mt-8 border-t-2 p-4">
<FaCopyright className="text-white   h-[40px] w-[40px] rounded-xl"/> <h1 className="text-xl text-gray-200 ">All Rights Reserved 2024</h1>
    </div>
  </motion.footer>
  )
}

export default Footer
