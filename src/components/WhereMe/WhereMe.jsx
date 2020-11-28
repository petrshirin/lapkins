import React from "react"
import styles from './WhereMe.module.css'
import whereMe from '../../img/whereMe.png'
import whereMeMobile from '../../img/whereMeMobile.png'
import useWindowDimensions from "../../utils/resize";
import Map from "../Map/Map";


const WhereMe = () => {
    const { height, width } = useWindowDimensions();
    console.log(height, width)
    return (
        <div className={styles.container}>
            <div className={styles.header}>Где мы находимся?</div>
            <div className={styles.content}>
                <Map width={width + "px"} height={width > 500 ? 3 * height / 4 + "px" : height + "px"}/>

            </div>
        </div>
    )
}

export default WhereMe
