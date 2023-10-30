import Link from 'next/link'
import styles from './Budget.module.css'


export const Budget = () => {
    return (
        <div className={styles.sectionBlack}>
            <div className={styles.container}>
                <Link href={``}>Solicite seu Orçamento</Link>
            </div>
        </div>
    )
}