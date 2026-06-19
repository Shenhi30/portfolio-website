import Image from 'next/image'
import Link from 'next/link'
import css from '../header/header.module.scss'


export default function Header () {
    return (
        <>
            <div className={css.header}>
                <nav className={css.header_logo}>
                <Image 
                    src="/public/Logo.svg"
                    alt="Logo"
                    width={ 20}
                    height={20}
                    priority
                />
                </nav>
                <p className={css.logo_name}>Shenhi</p>
                <ul className={css.nav_links}>
                    <li>
                        <Link href="/"><span className={css.hash}>#</span>home</Link>
                    </li>
                    <li>
                        <Link href="/"><span className={css.hash}>#</span>projects</Link>
                    </li>
                    <li>
                        <Link href="/"><span className={css.hash}>#</span>about-me</Link>
                    </li>
                    <li>
                        <Link href="/"><span className={css.hash}>#</span>contacts</Link>
                    </li>
                </ul>

            </div>
        </>
    )
}