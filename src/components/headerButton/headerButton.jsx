import React from 'react'
import styles from './headerButton.module.css'


const HeaderButton = ({name, href}) => (
    <div className={styles.button}>
        <a href={href}>{name}</a>
    </div>
)

export default HeaderButton

