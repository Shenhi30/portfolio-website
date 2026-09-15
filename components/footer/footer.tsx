import Image from 'next/image'
import css from './footer.module.scss'


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
                <p className={css.footer_email}>shenhi0master@gmail.com</p>
            </nav>
            
            <p className={css.footer_desk}>Front-end developer</p>    
        </div>
            
            <div>
            
            
            </div>  
        </section>
        </>
    )
}
