import css from "./hero.module.scss"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
        <>
        
        <section className={css.Hero}>
            <div className={css.text_box}>
                <h1 className={css.home_header}>Viktor is a <span className={css.text_purple}>front-end developer</span></h1>
                <p className={css.home_text}>front-end developer with 1 year expirence</p>
                <Link href="/contacts" className={css.contact_btn}>Contact me!!</Link>
            </div>
            <div className={css.image_box}>
                <div className={css.imageWrapper}>
                    <Image
                    src="/images/person.png"
                    alt='person'
                    width={457}
                    height={386}
                    priority
                    />
                </div>
                    <div className={css.under_text}>
                        <p>
                        Currently working on
                        <span className={css.white_text}>Portfolio
                        </span>
                        </p>
                    </div>
            </div>
        </section>
        </>
    )
}