import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import ToolKit from "./sections/ToolKit";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";
import MySkills from "./sections/MySkills";
const App = () => {
  return (
    <main className=" z-[-2] w-full m-0 p-0 overflow-x-hidden min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar/>
      <Hero/>
      <Services/>
      <ToolKit/>
      <AboutMe/>
      <MySkills/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </main>
    
  )
}

export default App
