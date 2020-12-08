import React from 'react'
import styles from './headerButton.module.css'


const HeaderButton = ({name, refToView, setSiteBarCond}) => (
    <div className={styles.button}>
        <a onClick={(event) => {
            document.getElementById(refToView).scrollIntoView({behavior: "smooth"})
            event.preventDefault()
            if (setSiteBarCond) {
                setSiteBarCond(false)
            }

        }}>{name}</a>
    </div>
)

export default HeaderButton

