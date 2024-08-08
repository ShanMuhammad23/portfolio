import { projects } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <section id="Projects" className="mt-12 w-[95%] m-auto">
        <motion.h1 
          initial={{ opacity: 0,x:-100 }}
          whileInView={{ opacity: 1 ,x:0}}
          transition={{duration:0.5,delay:0}}
        className="text-6xl blurtext m-auto text-white">My <span className="text-violet-800">P</span>rojects</motion.h1>
        <div className="flex flex-col gap-4 w-full  lg:w-[90%] m-auto">
        {projects.map((project)=>(
          <motion.div 
          key={project.tiltle}
          initial={{ opacity: 0,y:60 }}
          whileInView={{ opacity: 1 ,y:0}}
          transition={{duration:0.5,delay:0.2}}
          className="text-white h-max p-4 flex flex-col lg:flex-row items-center rounded-xl gap-6 bg-gray-800  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-violet-800"><img src={project.image} alt="" className="h-1/2 w-[200px]"/>
           <div className="flex flex-col ">
           <h1 className="gradtext text-2xl ">{project.tiltle}</h1>
            <p className="text-slate-400 leading-6">{project.description}</p>
           <div className="flex items-center"> 
            <h1 className="text-xl gradtext">Skills:</h1>
             {project.skills.map((skill)=>(
                
                    <p className="inline-block mx-5 ">{skill.title}</p>
                   
        
                
            ))}</div>
                    <a href={project.href} target="_blank"><button className="text-white py-1 px-6 rounded-xl border mt-3 border-violet-500 w-max">Explore Project</button></a> 

           </div>
            

            </motion.div>
           
        ))}

       </div>

    </section>
  )
}

export default Projects
