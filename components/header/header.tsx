import Image from 'next/image'
import Link from 'next/link'
import css from '../header/header.module.scss'


export default function NavBar () {
    return (
        <>
            <div className={css.nav_bar}>
                <nav className={css.nav_bar_logo}>
                <Image 
                    src="/public/Logo.svg"
                    alt="Logo"
                    width={ 20}
                    height={20}
                    priority
                />
                </nav>
                <p className={css.logo_name}>Shenhi</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

            </div>
        </>
    )
}