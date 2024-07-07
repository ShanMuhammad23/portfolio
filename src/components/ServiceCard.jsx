
import { motion } from "framer-motion"
const ServiceCard = ({title,description,icon}) => {
  return (
    <motion.div
    initial={{ opacity: 0,scale:0.5 }}
    whileInView={{ opacity: 1 ,scale:1}}
    transition={{duration:0.5,delay:0.2}}
    className="flex flex-col p-4 bg-neutral-500 bg-opacity-5 gap-4 items-start bg-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-4xl border border-violet-400 w-full mx-3 sm:w-[500px]">
        <img src={icon} alt="" className="w-[100px] h-[50px] "/>
        <h2 className="gradtext text-2xl ">{title}</h2>
        <p className="text-neutral-500 text-lg leading-8" >{description}</p>

    </motion.div>
  )
}

export default ServiceCard
