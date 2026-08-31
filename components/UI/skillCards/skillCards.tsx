import css from "./skillcards.module.scss"



interface SkillsProps {
  title: string;
  skills: string[];
}


export default function SkillCards({ title, skills }: SkillsProps) {
    return (
        <>
        <div className={css.card}>
                <h1>
                    {title}
                </h1>
                <p>
                    {skills.join(" ")}
                </p>
        </div>
        </>
    )
}