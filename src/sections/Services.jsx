import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"
import { motion } from "framer-motion"

const Services = () => {
  return (
    <section id="services" className="flex flex-col gap-4 flex-wrap mt-8 justify-center  w-full">
        <motion.h1
        initial={{ opacity: 0,x:-100 }}
        whileInView={{ opacity: 1 ,x:0}}
        transition={{duration:0.3,delay:0}}
        className="text-white blurtext text-6xl space-x-2 m-auto">My <span className="text-violet-900">S</span>ervices</motion.h1>
       <div className="gap-4 flex-wrap flex mt-5 justify-center  w-full">
        {services.map((service)=>(
            <ServiceCard 
          
            title={service.title} key={service.title}  description={service.description} icon={service.icon}/>
        ))}
     </div>
    </section>
  )
}

export default Services
