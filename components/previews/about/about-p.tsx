import SectionTitle from "@/components/UI/sectionTitle";
import css from "./about-p.module.scss";

export default function AboutP(){
    return (
        <>
        <SectionTitle title="about-me" />
            <section className={css.text}>
            <p>
            Hello, I&apos;m Viktor!
                    <br/>

                    <br/>
            I am a front-end developer based in Ukraine, specializing in building modern, responsive, and highly interactive web applications. My journey into software engineering began through rigorous self-taught exploration and was subsequently formalized through intensive coursework at GO-IT throughout 2025 and 2026. This deliberate blend of independent problem-solving and structured, industry-standard learning has equipped me with a deep, practical understanding of modern web architecture.
                    <br/>

                    <br/>
            I am currently seeking a junior or trainee position where I can bring my disciplined work ethic, full-stack project portfolio, and relentless drive for problem-solving to a collaborative team.

            </p>    
            </section>
        
        </>
    )
}