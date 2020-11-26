import React from 'react'
import styles from './headerButton.module.css'


const HeaderButton = ({name, refToView}) => (
    <div className={styles.button}>
        <a onClick={(event) => {
            document.getElementById(refToView).scrollIntoView({behavior: "smooth"})
            event.preventDefault()
        }}>{name}</a>
    </div>
)

export default HeaderButton

