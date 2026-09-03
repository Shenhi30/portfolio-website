import SectionTitle from "../../components/UI/sectionTitle"
import SkillCards from "@/components/UI/skillCards/skillCards"
import css from "./about.module.scss"


export default function about() {
    return (
        <>
            <h1 className={css.header}><span>/</span>about-me</h1>
            <section className={css.text}>
            <p>
            Hello, I&apos;m Viktor!
                    <br/>

                    <br/>
            I am a front-end developer based in Ukraine, specializing in building modern, responsive, and highly interactive web applications. My journey into software engineering began through rigorous self-taught exploration and was subsequently formalized through intensive coursework at GO-IT throughout 2025 and 2026. This deliberate blend of independent problem-solving and structured, industry-standard learning has equipped me with a deep, practical understanding of modern web architecture.
                    <br/>

                    <br/>
            Coming from a technical academic background in industrial automation systems, I inherently approach coding with a systems-level mindset. I do not simply write code; I engineer digital ecosystems. Whether I am architecting decoupled, full-stack mapping applications using React, Node.js, and MongoDB, or designing precise, containerized booking services with Next.js, Express, and MySQL, my primary focus remains on writing clean, scalable, and type-safe logic using TypeScript. I thrive at the intersection where complex technologies meet creative design, seamlessly bridging the gap between robust back-end databases and intuitive front-end user interfaces.
                    <br/>

                    <br/>
            I am currently seeking a junior or trainee position where I can bring my disciplined work ethic, full-stack project portfolio, and relentless drive for problem-solving to a collaborative team.

            </p>    
            </section>
            <SectionTitle title="Skills" />
            <div className={css.cardWrap}>
            <SkillCards
             title={"Languages"}
             skills={['Javascript,','Typescript']} />
            <SkillCards
             title={"Other"}
             skills={['html, ', 'css, ','sccs','REST']} />
            <SkillCards
             title={"Databases"}
             skills={['MYSQL, ','MongoDB']} />
            <SkillCards
             title={"Tools"}
             skills={['VScode,','git, ','figma ']} />
            <SkillCards 
            title={"Frameworks"}
             skills={['react, ','express.js']} />
            </div>
        </>
    )
}