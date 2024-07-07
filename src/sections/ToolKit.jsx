import { toolkit } from "../constants"
import { motion } from "framer-motion"

const ToolKit = () => {
  return (
    <div className="flexflex-col gap-4  mt-10">
      <motion.h1 
        initial={{ opacity: 0,x:-100 }}
        whileInView={{ opacity: 1 ,x:0}}
        transition={{duration:0.5,delay:0}}
      className="text-6xl text-white blurtext m-auto rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 mb-5">My <span className="text-violet-700">T</span>oolKit</motion.h1>
      <div className="flex items-center flex-wrap  p-2  justify-center gap-6">
        {toolkit.map((tool)=>(
            <motion.div 
            initial={{ opacity: 0,scale:0.5 }}
            whileInView={{ opacity: 1 ,scale:1}}
            transition={{duration:0.5,delay:0.2}}
            className="flex bg-neutral-400  bg-opacity-5 rounded-xl items-center justify-center w-[200px] h-[100px] p-4 border-2 border-violet-950">
                <img src={tool.icon} alt={tool.title} className="h-full w-full"/>
                <p className="text-2xl text-white">{tool.title}</p>
            </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ToolKit
