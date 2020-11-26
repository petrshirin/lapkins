import React from 'react'
import styles from './SiteFooter.module.css'
import Logo from "../logo/logo";
import InstIconPurple from "../../img/InstIconPurple.svg"
import TelIconPurple from "../../img/TelIconPurple.svg"
import HeaderButton from "../headerButton/headerButton";


const SiteFooter = () => {
    return (
        <div className={styles.container} id="main">
            <div className={styles.headerContainer}>
                <div className={styles.leftBar}>
                    <Logo/>
                    <div className={styles.positionText}>Режим работы:
                        <div>Пн-Вс с 9:00 до 20:00</div></div>
                </div>
                <div className={styles.headerButtons}>
                    <HeaderButton name="Главная" href={'/#main'}/>
                    <HeaderButton name="О нас" href={'#'}/>
                    <HeaderButton name="Услуги" href={'#'}/>
                    <HeaderButton name="Наши работы" href={'#'}/>
                </div>
                <div className={styles.socialNetworkContainer}>
                    <img src={InstIconPurple} alt="Instagram" width="30px" height="30px"/>
                    <img src={TelIconPurple} alt="Call" width="30px" height="30px"/>
                    <span> +7(3952)66-00-67</span>
                </div>
            </div>
        </div>
    )
}


export default SiteFooter
