
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
              techStack={['Next.js, ', 'SCSS, ', 'React, ', 'Node.js, ', 'MYSQL, ', 'Express']}
              description="Full-stack booking application for local car washing services."
              imageUrl="/images/CarWash.png"
              liveLink="https://kiyv-carwash.vercel.app/"
            />
            <Card
              title="NoteHub"
              techStack={['Next, ', 'React, ', 'Node.js, ', 'Mongodb, ', 'Express']}
              description="Full-stack app for note taking while learning."
              imageUrl="/images/NoteHub.png"
              liveLink="https://08-zustand-eta-azure.vercel.app/"
            />
        </div>
      </section>
            
        </>
    )

}