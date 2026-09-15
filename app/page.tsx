
import Hero from "../components/hero/hero"
import ProjectsP from "../components/previews/projects/projects-p"
import SkillsP from "../components/previews/skills/skills-p"
import AboutP from "../components/previews/about/about-p"
import ContactP from "@/components/previews/contacts/contacts-p"

export default function Home() {
  return (
    <>
      <Hero/>
      <ProjectsP/>
      <SkillsP />
      <AboutP />
      <ContactP />
    </>
  )
    
  
}
