import SectionTitle from "@/components/UI/sectionTitle"
import css from "./skills-p.module.scss"
import SkillCards from "@/components/UI/skillCards/skillCards"

export default function SkillsP() {
    return (
        <>
        
            <SectionTitle title={"Skills"} />
        <div className={css.cardWrap}>
            <SkillCards title={"Languages"} skills={[]} />
            <SkillCards title={"Other"} skills={[]} />
            <SkillCards title={"Databases"} skills={[]} />
            <SkillCards title={"Tools"} skills={[]} />
            <SkillCards title={"Frameworks"} skills={[]} />
        </div>
        </>
    )
}