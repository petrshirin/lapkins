import React from "react"
import styles from './WhereMe.module.css'
import whereMe from '../../img/whereMe.png'


const WhereMe = () => (
    <div className={styles.container}>
        <div className={styles.header}>Где мы находимся?</div>
        <div className={styles.content}>
            <img src={whereMe} alt={"map"}/>

        </div>
    </div>
)

export default WhereMe
