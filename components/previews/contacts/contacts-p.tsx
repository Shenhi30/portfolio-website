import SectionTitle from "@/components/UI/sectionTitle"
import css from "./contacts-p.module.scss"
import ContactInfo from "@/components/UI/social/contactProp"




export default function ContactP() {
    return (
        <>
        
        <SectionTitle title={"contacts"}/>
        <section className={css.container}>
            <div className={css.text}>
                I am currently seeking a junior or trainee position where I can brmy disciplined work ethic, full-stack project portfolio, relentless drive for problem-solving to a collaborative team.
            </div>
                
            <div className={css.box}>
                <h1>My contacts</h1>
                    <ContactInfo
                        imageUrl="/images/Email.png"
                        text="shenhi0master@gmail.com"
                        imageAlt="email"
                        linkTo="mailto:shenhi0master@gmail.com"
                    />
                    <ContactInfo
                        imageUrl="/images/Linkedin.png"
                        text="Linkedin"
                        imageAlt="LinkedIn" 
                        linkTo="https://www.linkedin.com/in/viktor-poliakov-353479393"
                    />
                    
            </div>
                

        </section>

        </>
    )
}