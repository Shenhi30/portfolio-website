import Image from "next/image"
import Link from "next/link"
import css from "../projects/projects-p.module.scss"
import SectionTitle from "@/components/UI/sectionTitle"


export default function ProjectsP() {
    return (
        <>
        
        <section>
          <SectionTitle title="projects" viewAllLink="/projects" />
          <div className={css.cardWrap}>
        <div className={css.card} >
          <Image className={css.imageWrap}
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
            CarWash servise
          </h1>
          <p>

          </p>
          <Link href="https://kiyv-carwash.vercel.app/">Live ←—→</Link>
        </div>
        <div className={css.card}>
          <Image className={css.imageWrap}
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
            NoteNub
          </h1>
          <p>

          </p>
          <Link href="https://08-zustand-eta-azure.vercel.app/">Live ←—→</Link>
        </div>
        </div>
      </section>
            
        </>
    )

}