import Link from 'next/link'
import css from "./home.module.scss"
import Image from 'next/image'
import Hero from "../components/hero/hero"


export default function Home() {
  return (
    <>
      <Hero/>


      <section className={css.projects_preview}>
        <div><h2><span className={css.hash}>#</span>projects</h2></div>
        <br />
        <Link href="/projects">Viev all ~→</Link>

        <div className={css.cards}>
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
        <div className={css.cards}>
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
      
      <section className={css.skills_preview}>




      </section>

      <section className={css.about_me_preview}>




      </section>
      
      <section className={css.contacts_preview}>




      </section>
    </>
  )
    
  
}
