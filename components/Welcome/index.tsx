import Image from "next/image"
import styles from "./Welcome.module.css"


export const Welcome = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftCard}>
                <h2>Lorem Inpsun</h2>
                <p>Contrary to popular belief, 
                    Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin 
                    literature from 45 BC, making it over 2000 
                    years old. Richard McClintock, 
                    a Latin professor at Hampden-Sydney College in Virginia, 
                    looked up one of the more obscure Latin words, consectetur, 
                    from a Lorem Ipsum passage, and going through the cites of the 
                    word in classical literature, discovered the undoubtable source.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus
                    Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero,
                    written in 45 BC. This book is a treatise on the theory of ethics, 
                    very popular during the Renaissance. The first line of Lorem Ipsum, 
                    &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
                </p>
            </div>
            <div className={styles.rightCard}>
                <Image 
                    src="/assets/img/welcome.jpg" 
                    alt="" 
                    height={300}
                    width={400} 
                />
            </div>
        </div>
    )
}