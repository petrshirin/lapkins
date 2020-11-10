import React from 'react'
import styles from './siteHeader.module.css'
import Logo from "../logo/logo";
import InstIcon from "../../img/InstIcon.png"
import TelIcon from "../../img/TelIcon.png"
import HeaderButton from "../headerButton/headerButton";

const SiteHeader = () => {
    return (
        <div className={styles.container} id="main">
            <div className={styles.headerContainer}>
                <div className={styles.leftBar}>
                    <Logo/>
                    <div className={styles.positionText}>г. Иркутск</div>
                </div>
                <div className={styles.headerButtons}>
                    <HeaderButton name="Главная" href={'/#main'}/>
                    <HeaderButton name="О нас" href={'#'}/>
                    <HeaderButton name="Услуги" href={'#'}/>
                    <HeaderButton name="Наши работы" href={'#'}/>
                    <HeaderButton name="Контакты" href={'#'}/>
                </div>
                <div className={styles.socialNetworkContainer}>
                    <img src={InstIcon} alt="Instagram" width="40px" height="40px"/>
                    <img src={TelIcon} alt="Call" width="40px" height="40px"/>
                </div>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    Мы сделаем Вашего
                    питомца <span>счастливым</span>
                </div>
                <div className={styles.textContainer}>
                    Профессиональный груминг салон Lapkins для собак и кошек
                </div>
            </div>
        </div>
    )
}


export default SiteHeader
