import React from 'react'
import styles from './ServicePoint.module.css'


const ServicePoint = ({header, text, img, reverse}) => (
    <div className={!reverse ? styles.container : styles.containerReverse}>
        <img src={img} alt={header}/>
        <div className={!reverse ? styles.textContainer : styles.textContainerReverse}>
            <div className={styles.headerContainer}>
                {header}
            </div>
            <div>
                {text}
            </div>
        </div>
    </div>
)

export default ServicePoint