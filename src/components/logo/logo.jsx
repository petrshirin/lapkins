import React from "react";
import logoImg from '../../img/logo.png'
import styles from './logo.module.css'

const Logo = () => (
    <div className={styles.container}>
        <img src={logoImg} alt="LOGO" width="75%" height="55%"/>
    </div>
)

export default Logo


