import Image from 'next/image'
import css from './footer.module.scss'
import ContactInfo from '../UI/social/contactProp'


export default function Footer() {
    return (
        <>
        <div className={css.line}></div>
        <section className={css.footerSeparator}>
    
            <div>
                    
            <nav className={css.footer_logo}>
                <Image 
                    src="/images/fox-logo.png"
                    alt="Logo"
                    width={32}
                    height={32}
                    priority
                />
            
                <p className={css.footer_name}>Viktor</p>
                <a href="mailto:viktor.poliakov001@gmail.com" target="_blank" rel="noopener noreferrer" className={css.footer_email}>viktor.poliakov001@gmail.com</a>
            </nav>
            
            <p className={css.footer_desk}>Front-end developer</p>    
        </div>
            
            <div className={css.media}>
                    <h1>MEDIA</h1>
                    <div className={css.links}>
                    <ContactInfo
                        imageUrl={'/images/Github.png'}
                        imageAlt={'github'}
                        linkTo='https://github.com/Shenhi30'
                    />
                    <ContactInfo
                        imageUrl={'/images/Email.png'}
                        imageAlt={'email'}
                        linkTo='mailto:viktor.poliakov001@gmail.com'
                    />
                    <ContactInfo
                        imageUrl={'/images/Linkedin.png'}
                        imageAlt={'linkedin'}
                        linkTo='https://www.linkedin.com/in/viktor-poliakov-353479393'
                    />

                    </div>
            </div>  
        </section>
        </>
    )
}
