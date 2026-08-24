import Image from "next/image"
import Link from "next/link"
import css from "../projects/projects-p.module.scss"


export default function projectsPrewiev() {
    return (
        <>
        
        <section>
        <div><h2><span className={css.hash}>#</span>projects</h2></div>
        <br />
        <Link href="/projects">Viev all ~→</Link>

        <div >
          <Image 
          src=""
          width={330}
          height={201}
          alt='preview'
          priority
          />

          <p>

          </p>

          <h1>

          </h1>
          <p>

          </p>
          <Link href="https://kiyv-carwash.vercel.app/">Live ←—→</Link>
        </div>
        <div>
          <Image 
          src=""
          width={330}
          height={201}
          alt='preview'
          priority
          />

          <p>

          </p>
          <h1>

          </h1>
          <p>

          </p>
          <Link href="https://09-auth-iota-two.vercel.app">Live ←—→</Link>
        </div>

      </section>
            
        </>
    )

}