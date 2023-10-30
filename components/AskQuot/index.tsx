import styles from './AskQuot.module.css'
import { Button } from '../Button'


export const AskQuot = () => {
    return (
        <div className={styles.sectionBlack}>
            <div className={styles.container}>
                <Button 
                    link=""
                    label="Peça seu Orçamento"
                />
            </div>
        </div>
    )
}