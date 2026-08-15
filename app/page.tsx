import Link from 'next/link'
import css from "./home.module.scss"
import Image from 'next/image'

export default function Home() {
  return (
    <>
      
      <section className={css.Hero}>
      <div className={css.text_box}>
    <h1 className={css.home_header}>Viktor is a <span className={css.text_purple}>front-end developer</span></h1>
      <p className={css.home_text}>aspiring front-end developer with 1 year expirence</p>
        <Link href="/contacts" className={css.contact_btn}>Contact me !</Link>
        </div>
        <div className={css.image_box}>
          <Image
            src="/images/person.png"
            alt='person'
            width={457}
            height={386}
            priority
          />
          <div className={css.under_text}>
            <p>
            <span className={css.box}></span>
            Currently working on
            <span className={css.white_text}>Portfolio

            </span>
            </p>
          </div>
        </div>
      </section>

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
