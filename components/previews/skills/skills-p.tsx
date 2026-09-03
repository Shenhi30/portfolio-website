import SectionTitle from "@/components/UI/sectionTitle"
import css from "./skills-p.module.scss"
import SkillCards from "@/components/UI/skillCards/skillCards"

export default function SkillsP() {
    return (
        <>
        
            <SectionTitle title={"Skills"} />
        <div className={css.cardWrap}>
            <SkillCards
             title={"Languages"}
             skills={['Javascript,','Typescript']} />
            <SkillCards
             title={"Other"}
             skills={['html, ', 'css, ','scss','REST']} />
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