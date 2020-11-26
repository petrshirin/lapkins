import {React} from "react";
import styles from './AboutAs.module.css'

const AboutAs = ({goToRef}) => {
    console.log(goToRef)
    return (
        <div className={styles.AboutAs} id={goToRef}>
            <div className={styles.header}>О нас</div>
            <div className={styles.contentContainer}>
                <div className={styles.textContainer}>
                    <p>Lapkins — это место, где каждый четвероногий друг получит достойную стрижку и уход от
                        профессионалов.</p>
                    <p>Мы — творческая команда, которая бесконечно любит животных и считает груминг своим призванием. Вы
                        можете доверять нам</p>
                </div>
                <div className={styles.imgContainer}>

                </div>
            </div>
        </div>
    )
}

export default AboutAs


