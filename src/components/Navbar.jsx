import { FaBars } from "react-icons/fa6";
import { Navlinks } from "../constants";
import Button from "./Button";
import { motion } from "framer-motion";
import { FaCompressArrowsAlt, FaHamburger, FaWindowClose } from "react-icons/fa";
import { PiArrowFatLinesDownThin } from "react-icons/pi";
import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);

    
  };
  return (
    <>
    {isOpen && <section id="sidemenu" className=" flex  flex-col  absolute transition-opacity duration-500 z-100 bg-gray-900  h-max w-full right-0">
      <div className="flex items-center justify-end p-4 cursor-pointer">
        <FaWindowClose className="text-white text-3xl bg-violet-800 " onClick={handleClick} />
      </div>
      <div className="flex flex-col p-9 gap-4 items-center">{Navlinks.map((link)=>(
        <motion.a onClick={handleClick}
        initial={{ opacity: 0,scale:0.5,x:-100 }}
        whileInView={{ opacity: 1 ,scale:1,x:0}}
        transition={{duration:0.5,delay:0}}
        href={link.href} key={link.label} className="text-white  bg-transparent border-2 w-[200px] border-gray-500 text-xl rounded-lg py-3 flex items-center justify-center  ">{link.label}</motion.a>
      ))}
      <Button/>
      </div>
    </section>}
    <motion.nav 
    initial={{ opacity: 0,scale:0.5 }}
    whileInView={{ opacity: 1 ,scale:1}}
    transition={{duration:0.5,delay:0}}
    className="flex items-center justify-between sm:px-12 text-white p-4 shadow-xl">
        <h1 className="text-2xl text-violet-400 font-bold">Shan.</h1>
        <div className="lg:flex hidden items-center gap-12 text white ">
        {Navlinks.map((link)=>(
            <a href={link.href} className="text-xl hover:text-violet-700 " key={link.label}> {link.label}</a>
        ))}
        </div>
       <a href="https://github.com/ShanMuhammad23" target="_blank"> <div  className="hidden sm:block"><Button  /></div></a>
      <div className=" items-center justify-center border-2 p-3 rounded-xl flex sm:hidden" onClick={handleClick}> <FaBars className="text-white  cursor-pointer"/></div>
    </motion.nav>
    </>
  )
}

export default Navbar
