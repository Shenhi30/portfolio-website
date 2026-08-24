import Image from "next/image"
import Link from "next/link"
import css from "../projects/projects-p.module.scss"


export default function ProjectsP() {
    return (
        <>
        
        <section>
        <nav className={css.projectsP}>
        <div><h2><span className={css.hash}>#</span>projects</h2></div>
        <br />
        <Link href="/projects">Viev all ~→</Link>
        </nav>
        <div className={css.cards} >
          <Image 
          src="/images/CarWash.png"
          alt="CarWash" 
          width={330}
          height={201}
          priority
          />

          <p className={css.text_gray}>
            html, react, node.js, MYSQL, express
          </p>

          <h1>

          </h1>
          <p>

          </p>
          <Link href="https://kiyv-carwash.vercel.app/">Live ←—→</Link>
        </div>
        <div className={css.cards}>
          <Image 
          src="/images/NoteHub.png"
          width={330}
          height={201}
          alt='NoteHub'
          priority
          />

          <p className={css.text_gray}>
            html, react, node.js, mongodb, express
          </p>
          <h1>

          </h1>
          <p>

          </p>
          <Link href="https://08-zustand-eta-azure.vercel.app/">Live ←—→</Link>
        </div>

      </section>
            
        </>
    )

}