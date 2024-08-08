import { heropic } from "../assets/images"
import { motion } from "framer-motion"

const AboutMe = () => {
  const Animation=(delay,x)=>{
    return{
      initial:{ opacity: 0, x },
      whileInView:{ opacity: 1, x: 0 },
      transition:{ duration: 0.5,delay }
    }
  }
  return (
    <section id="AboutMe" className="h-[70%] flex-col w-[95%] m-auto  lg:flex-row  mt-12 flex gap-5  justify-around ">
      <motion.img
       {...Animation(0,-100)}
        src={heropic} alt="My Pic" className="w-full sm:w-[350px] h-[80%]" />
      <div className="flex flex-col  sm:ml-10 w-full mx-2 lg:w-[60%] justify-between">
        <motion.h1
             {...Animation(0.2,-100)}

          className="blurtext text-4xl text-white text-left"><span className="text-violet-800">A</span>bout Me</motion.h1>
        <motion.p
                {...Animation(0.5,-100)}
          
          className="text-neutral-400 leading-6 w-[90%] text-lg lg:w-[70%]">Dedicated front-end developer with a keen eye for design and a passion for creating seamless user experiences. With a robust understanding of HTML, CSS, JavaScript, and various front-end frameworks, I excel in transforming complex concepts into visually appealing and user-friendly web applications. Committed to continuous learning and innovation, Shan consistently stays updated with the latest industry trends to deliver cutting-edge solutions that enhance user engagement and satisfaction.</motion.p>
       <button
  class="cursor-pointer bg-gray-800 mt-5 w-max flex items-center gap-2 px-6 py-4 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none"
>
  <svg
    class="w-5 h-5"
    stroke="currentColor"
    stroke-width="2"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg>
  Dowmload Resume
</button>

        
      </div>
    </section>
  )
}

export default AboutMe
