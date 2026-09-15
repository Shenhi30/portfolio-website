import SectionTitle from "@/components/UI/sectionTitle";
import css from "./about-p.module.scss";
import Link from "next/link";

export default function AboutP(){
    return (
        <>
        <SectionTitle title="about-me" />
            <section className={css.text}>
            <p>
            Hello, I&apos;m Viktor!
                    <br/>

                    <br/>
            I am a front-end developer based in Ukraine, specializing in building modern, responsive, and highly interactive web applications. My journey into software engineering began through rigorous self-taught exploration.

            </p>    
            </section>

            <Link href="/about-me" className={css.button}>Read More —→</Link>
        
        </>
    )
}