
import css from "../projects/projects-p.module.scss"
import SectionTitle from "@/components/UI/sectionTitle"
import Card from "@/components/UI/card/card"


export default function ProjectsP() {
    return (
        <>  
        <section>
          <SectionTitle title="projects" viewAllLink="/projects" />
          <div className={css.cardWrap}>
            <Card
              title="CarWash services"
              techStack={['Next.js, ', 'scss, ', 'react, ', 'node.js, ', 'MYSQL, ', 'express']}
              description="Full-stack booking application for local car washing services."
              imageUrl="/images/CarWash.png"
              liveLink="https://kiyv-carwash.vercel.app/"
            />
            <Card
              title="NoteHub"
              techStack={['Next, ', 'react, ', 'node.js, ', 'mongodb, ', 'express']}
              description="Full-stack app for note taking while learning."
              imageUrl="/images/NoteHub.png"
              liveLink="https://08-zustand-eta-azure.vercel.app/"
            />
        </div>
      </section>
            
        </>
    )

}