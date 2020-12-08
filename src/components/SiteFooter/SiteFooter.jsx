import React from 'react'
import styles from './SiteFooter.module.css'
import Logo from "../logo/logo";
import InstIconPurple from "../../img/InstIconPurple.svg"
import TelIconPurple from "../../img/TelIconPurple.svg"
import HeaderButton from "../headerButton/headerButton";


const SiteFooter = ({goToRef, siteHeaderRef, aboutUsRef, servicesRef, portfolioRef}) => {
    return (
        <div className={styles.container} id={goToRef}>
            <div className={styles.headerContainer}>
                <div className={styles.leftBar}>
                    <Logo/>
                    <div className={styles.positionText}>Режим работы:
                        <div>Пн-Вс с 9:00 до 20:00</div></div>

                </div>
                <div className={styles.headerButtons}>
                    <HeaderButton name="Главная" refToView={siteHeaderRef}/>
                    <HeaderButton name="О нас" refToView={aboutUsRef}/>
                    <HeaderButton name="Услуги" refToView={servicesRef}/>
                    <HeaderButton name="Наши работы" refToView={portfolioRef}/>
                    <HeaderButton name="Контакты" refToView={goToRef}/>
                </div>
                <div className={styles.socialNetworkContainer}>
                    <a target="_blank" href={"https://www.instagram.com/lapkins.irk/"}>
                        <img src={InstIconPurple} alt="Instagram"/>
                    </a>
                    <a target="_blank" href={"https://api.whatsapp.com/send?phone=79025660067"}>
                        <img src={TelIconPurple} alt="Call"/>
                    </a>
                    <a href={"tel:+79025660067"}>
                        <span className={styles.phone}> +7(3952)66-00-67</span>
                    </a>

                </div>
            </div>
        </div>
    )
}


export default SiteFooter
