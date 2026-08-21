import Image from 'next/image'
import Link from 'next/link'
import css from '../header/header.module.scss'


export default function Header () {
    return (
        <>
            <header className={css.header}>
                <Link href="/" className={css.header_logo}>
                <Image 
                    src="/images/logo.png"
                    alt="Logo"
                    width={16}
                    height={16}
                    priority
                />
                
                <span className={css.logo_name}>Viktor</span>
                </Link>
                <nav className={css.navbar}>
                    <ul className={css.nav_links}>
                        <li>
                            <Link href="/"><span className={css.hash}>#</span>home</Link>
                        </li>
                        <li>
                            <Link href="/projects"><span className={css.hash}>#</span>projects</Link>
                        </li>
                        <li>
                            <Link href="/about-me"><span className={css.hash}>#</span>about-me</Link>
                        </li>
                        <li>
                            <Link href="/contacts"><span className={css.hash}>#</span>contacts</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}