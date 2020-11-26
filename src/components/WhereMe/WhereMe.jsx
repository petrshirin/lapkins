import React from "react"
import styles from './WhereMe.module.css'
import whereMe from '../../img/whereMe.png'
import whereMeMobile from '../../img/whereMeMobile.png'
import useWindowDimensions from "../../utils/resize";


const WhereMe = () => {
    const { height, width } = useWindowDimensions();

    return (
        <div className={styles.container}>
            <div className={styles.header}>Где мы находимся?</div>
            <div className={styles.content}>
                <img src={width > 1000 ? whereMe : whereMeMobile} alt={"map"}/>

            </div>
        </div>
    )
}

export default WhereMe
