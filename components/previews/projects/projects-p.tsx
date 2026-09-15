
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


// https://shenhi30.github.io/goit-js-hw-12/ image gallery using Pixabay API
// https://04-react-query-njno6bg56-shenhi30s-projects.vercel.app/ movie database with raiting, short description, realise date using TMDB API
