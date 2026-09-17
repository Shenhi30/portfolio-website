import css from "./contacts.module.scss"
import ContactInfo from "@/components/UI/social/contactProp"


export default function Contacts() {
    return (
        <>
        <h1><span className={css.slash}>/</span>Contacts</h1>
        <section className={css.container}>
            <div className={css.text}>
                I am currently seeking a junior or trainee position where I can brmy disciplined work ethic, full-stack project portfolio, relentless drive for problem-solving to a collaborative team.
            </div>
                
            <div className={css.box}>
                <h1>My contacts</h1>
                    <ContactInfo
                        imageUrl="/images/Email.png"
                        text="viktor.poliakov001@gmail.com"
                        imageAlt="email"
                        linkTo="mailto:viktor.poliakov001@gmail.com"
                    />
                    <ContactInfo
                        imageUrl="/images/Linkedin.png"
                        text="Linkedin"
                        imageAlt="LinkedIn" 
                        linkTo="https://www.linkedin.com/in/viktor-poliakov-353479393"
                    />
                    
            </div>
                
        </section>
        
            <h1><span className={css.slash}>/</span>All contacts</h1>
            <div className={css.horisontal}>

                    <ContactInfo
                        imageUrl="/images/Email.png"
                        text="viktor.poliakov001@gmail.com"
                        imageAlt="email"
                        linkTo="mailto:viktor.poliakov001@gmail.com"
                    />
                    <ContactInfo
                        imageUrl="/images/Linkedin.png"
                        text="Linkedin"
                        imageAlt="LinkedIn" 
                        linkTo="https://www.linkedin.com/in/viktor-poliakov-353479393"
                    />
                
                    <ContactInfo
                        imageUrl="/images/Discord.png"
                        text="@Shenhi30"
                        imageAlt="Discord"
                    />
                    <ContactInfo
                        imageUrl="/images/Github.png"
                        text="Github"
                        imageAlt="Github" 
                        linkTo="https://github.com/Shenhi30"
                    />

            </div>

        </>
    )
}