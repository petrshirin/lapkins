import React from "react";
import styles from './Button.module.css'


const Button = ({children, onClickHandler}) => {

    return (
        <div className={styles.container} onClick={onClickHandler}>
            {children}
        </div>
    )}

export default Button



