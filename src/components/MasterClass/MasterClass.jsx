import React from "react"
import styles from './MasterClass.module.css'
import Button from '../../components/Button/Button'
import InstIcon from '../../img/InstIcon.svg'

const MasterClass = () => (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.header}>
                В Lapkins проводятся
                <span> мастер-классы</span>
            </div>
            <div className={styles.row}>
                <div className={styles.line}>

                </div>
            </div>

            <div className={styles.text}>
                Хочешь улучшить свои навыки? Следите за нами в инстаграме и не пропускайте обновления о мастер-классах.
                Будем рады Всем!
            </div>
            <Button>
                <a href={"https://www.instagram.com/lapkins.irk/"} target={"_blank"}>
                    <span>ПОДПИСАТЬСЯ <img src={InstIcon} style={{width: "1em"}}/></span>
                </a>

            </Button>

        </div>
    </div>
)

export default MasterClass
