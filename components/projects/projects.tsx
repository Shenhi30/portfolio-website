import Card from "../UI/card/card"
import css from "./projects.module.scss"




export default function Projects() {
    return (
        <>
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
            techStack={['Next.js, ', 'React, ', 'Node.js, ', 'Mongodb, ', 'Express']}
            description="Full-stack app for note taking while learning."
            imageUrl="/images/NoteHub.png"
            liveLink="https://08-zustand-eta-azure.vercel.app/"           
            
        />
         <Card
            title={"Movie DB"}
            description={"movie database with raiting, short description, realise date using TMDB API"}
            techStack={['Javascript','React','Vite.js']}
            imageUrl={"/images/TMDB.png"} 
            liveLink="https://04-react-query-njno6bg56-shenhi30s-projects.vercel.app/"       
            
        />
         <Card
            title={"Image gallery"}
            description={"image gallery using Pixabay API"}
            techStack={['Vite.js','CSS','Javascript']}
            imageUrl={"/images/PIXABY.png"}
            liveLink="https://shenhi30.github.io/goit-js-hw-12/"        
            
        />
         <Card
            title={"Portfolio"}
            description={"you are here now"}
            techStack={['Next.js, ', 'React, ', 'SCSS']}
            imageUrl={"/images/portfolio.png"}            
            
        />
        </div>
        </>
    )
}