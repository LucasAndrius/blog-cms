import { navigationsLinks } from '@/utils/data'
import styles from './Navbar.module.css'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                <h1 className={styles.title}>Site...</h1>
                <img src="" alt="imagem..." />
                </div>
            </header>
            <ul className={styles.navLinks}>
                {navigationsLinks.map((link, index) => (
                    <li 
                    key={index}
                    className={styles.linkItem}
                    >
                        <Link href={link.path[0]}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}