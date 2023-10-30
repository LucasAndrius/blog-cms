import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link"
import styles from "./Button.module.css"

type Props = {
    label: string;
    link: Url;
}

export const Button = (props: Props) =>{
    return(
        <Link 
            href={props.link} 
            className={styles.link}>
            {props.label}
        </Link>
    )
}