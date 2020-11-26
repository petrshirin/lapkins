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
                    <img src={InstIconPurple} alt="Instagram"/>
                    <img src={TelIconPurple} alt="Call"/>
                    <span className={styles.phone}> +7(3952)66-00-67</span>
                </div>
            </div>
        </div>
    )
}


export default SiteFooter
