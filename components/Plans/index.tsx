import { Button } from "../Button"
import styles from "./Plans.module.css"

export const Plans = () => {
    return (
        <div className={styles.container}>
            <h2>Conheça nossos planos</h2>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>
                        <h4>Plano 1</h4>
                    </div>
                    <div className={styles.cardDetails}>
                        detalhes
                        <Button 
                            link=""
                            label="Quero este"
                        />
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>
                            <h4>Plano 2</h4>
                        </div>
                        <div className={styles.cardDetails}>
                            detalhes
                            <Button 
                                link=""
                                label="Quero este"
                            />
                        </div>
                    </div>
                <div className={styles.card}>
                    <div className={styles.cardTitle}>
                        <h4>Plano 3</h4>
                    </div>
                    <div className={styles.cardDetails}>
                        detalhes
                        <Button 
                            link=""
                            label="Quero este"
                        />
                    </div>
                </div>
            </div>
            
        </div>
    )
}