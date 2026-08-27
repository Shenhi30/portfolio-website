import Image from 'next/image'
import css from './footer.module.scss'


export default function Footer() {
    return (
        <>
        <div>
            <nav className={css.footer_logo}>
                <Image 
                    src="/images/logo.png"
                    alt="Logo"
                    width={16}
                    height={16}
                    priority
                />
            </nav>
            <p className={css.footer_name}>Viktor</p>
            <p className={css.footer_email}>shenhi0master@gmail.com</p>
            <p className={css.footer_desk}>Front-end developer</p>    
            
        </div>
        
        </>
    )
}
