import { heropic } from "../assets/images";
import { motion } from "framer-motion"

const Animation = delay => ({

  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.4, delay }
})
const Hero = () => {
  return (
    <section id="hero" className="sm:min-h-screen flex-col flex lg:flex-row justify-around lg:items-center ">
      <div className="text-white p-4   flex lg:w-2/5 flex-col justify-center ">

        <motion.h1
          {...Animation(0)}


          className=" text-5xl sm:text-6xl   text-white space-x-3">Shan Muhammad</motion.h1>

        <motion.h2
          {...Animation(0.4)}

          className=" gradtext text-xl sm:text-2xl mt-5">Front End Web Developer</motion.h2>
        <motion.p
          {...Animation(0.6)}

          className="mt-8 text-neutral-400">Transforming innovative designs into seamless digital experiences, I specialize in crafting responsive, interactive, and visually stunning websites. With a passion for cutting-edge technologies and user-centric design, I bring ideas to life on the web.</motion.p>
        <a href="#ContactMe"> <button
  class="cursor-pointer bg-gray-800 z-[-1] mt-5 w-max flex items-center gap-2 px-6 py-4 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none"
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
  Hire Me
</button></a>
      </div>

      <div className="w-full  h-auto sm:w-[350px] sm:h-[350px] mb-5 p-4 lg:mr-8">
        <motion.img
          {...Animation(0.8)}

          src={heropic} alt="Shan" className="w-full h-full  rounded-xl" />


      </div>
    </section>
  )
}

export default Hero
