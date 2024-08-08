import { motion } from "framer-motion"
const MySkills = () => {
  return (
   <section id="mySkills" className="mt-12 sm:w-[95%] m-auto rounded-2xl p-4 flex flex-col items-center bg-gray-500 bg-opacity-10">
    <h1 className="blurtext text-6xl m-auto text-white">My <span className="text-violet-600">S</span>kills</h1>
    <div className="flex flex-col  w-full sm:w-2/3 ">
    <div className="flex flex-col gap-3 p-4 ">
        <p className="text-xl gradtext">HTML</p>
        <div className="h-[50px] sm:w-2/3 border-2 border-gray-500 rounded-full">
            <motion.div
            initial={{ width:40 }}
            whileInView={{ width:"95%"}}
            transition={{duration:0.5,delay:0}}
            className="skillgradborder  h-full rounded-full w-[95%] flex items-center justify-center">
                <p className="text-white text-xl ">95%</p>
            </motion.div>
        </div>
    </div>
    <div className="flex flex-col gap-3 p-4">
        <p className="text-xl gradtext">CSS</p>
        <div className="h-[50px] sm:w-2/3 border-2 border-gray-500 rounded-full">
            <motion.div 
           initial={{ width:40 }}
           whileInView={{ width:"90%"}}
           transition={{duration:0.5,delay:0}}
            className="skillgradborder  h-full rounded-full w-[90%] flex items-center justify-center">
                <p className="text-white text-xl ">90%</p>
            </motion.div>
        </div>
    </div>
    <div className="flex flex-col gap-3 p-4">
        <p className="text-xl gradtext">Javascript</p>
        <div className="h-[50px] sm:w-2/3 border-2 border-gray-500 rounded-full">
            <motion.div 
          initial={{ width:40 }}
          whileInView={{ width:"75%"}}
          transition={{duration:0.5,delay:0}}
            className="skillgradborder  h-full rounded-full w-[75%] flex items-center justify-center">
                <p className="text-white text-xl ">75%</p>
            </motion.div>
        </div>
    </div>
    <div className="flex flex-col gap-3 p-4">
        <p className="text-xl gradtext">Tailwind CSS</p>
        <div className="h-[50px] sm:w-2/3 border-2 border-gray-500 rounded-full">
            <motion.div 
           initial={{ width:40 }}
           whileInView={{ width:"80%"}}
           transition={{duration:0.5,delay:0}}
            className="skillgradborder h-full rounded-full w-[80%] flex items-center justify-center">
                <p className="text-white text-xl ">80%</p>
            </motion.div>
        </div>
    </div>
    <div className="flex flex-col gap-3 p-4">
        <p className="text-xl gradtext">React.JS</p>
        <div className="h-[50px] sm:w-2/3 border-2 border-gray-500 rounded-full">
            <motion.div 
           initial={{ width:40 }}
           whileInView={{ width:"60%"}}
           transition={{duration:0.5,delay:0}}
            className="skillgradborder border-white h-full rounded-full w-[60%] flex items-center justify-center">
                <p className="text-white text-xl ">60%</p>
            </motion.div>
        </div>
    </div>
    <div className="flex flex-col gap-3 p-4">
        <p className="text-xl gradtext">Framer Motion</p>
        <div className="h-[50px] sm:w-2/3 border-2 border-gray-500 rounded-full">
            <motion.div 
            initial={{ width:40 }}
            whileInView={{ width:"75%"}}
            transition={{duration:0.5,delay:0}}
            className="skillgradborder border-white h-full rounded-full w-[75%] flex items-center justify-center">
                <p className="text-white text-xl ">75%</p>
            </motion.div>
        </div>
    </div>
    </div>
   </section>
  )
}

export default MySkills
