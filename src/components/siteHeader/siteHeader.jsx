import React, {useState} from 'react'
import styles from './siteHeader.module.css'
import Logo from "../logo/logo";
import InstIcon from "../../img/InstIcon.svg"
import TelIcon from "../../img/TelIcon.svg"
import HeaderButton from "../headerButton/headerButton";
import ExitIcon from  "../../img/exit.svg"
import SiteBar from  "../../img/siteBar.svg"
import InstIconPurple from "../../img/InstIconPurple.svg"
import TelIconPurple from "../../img/TelIconPurple.svg"
import Button from '../../components/Button/Button'

const SiteHeader = ({goToRef, aboutUsRef, servicesRef, portfolioRef, contactsRef}) => {

    const [siteBarCond, setSiteBarCond] = useState(false);

    const openCloseSiteBar = () => {
        setSiteBarCond(!siteBarCond)
    }

    return (
        <div className={styles.container} id={goToRef}>
            <div className={styles.headerContainer}>
                <div className={styles.leftBar}>
                    <Logo/>
                    <div className={styles.positionText}>г. Иркутск</div>
                </div>
                <div className={styles.headerButtons}>
                    <HeaderButton name="Главная" refToView={goToRef}/>
                    <HeaderButton name="О нас" refToView={aboutUsRef}/>
                    <HeaderButton name="Услуги" refToView={servicesRef}/>
                    <HeaderButton name="Наши работы" refToView={portfolioRef}/>
                    <HeaderButton name="Контакты" refToView={contactsRef}/>
                </div>
                <div className={styles.socialNetworkContainer}>
                    <img src={InstIcon} alt="Instagram"/>
                    <img src={TelIcon} alt="Call" />
                </div>
            </div>
            <div className={styles.headerContainerMobile}>
                <Logo className={!siteBarCond ? styles.mobileSiteBar : styles.noneDisplay}/>
                <div className={!siteBarCond ? styles.mobileSiteBar : styles.noneDisplay} onClick={openCloseSiteBar}>
                    <img src={SiteBar} alt={"exit"}/>
                </div>
                <div className={!siteBarCond ? styles.noneDisplay : styles.headerButtonsMobile} >
                    <img className={!siteBarCond ? styles.noneDisplay : ""} src={ExitIcon} alt={"exit"} onClick={openCloseSiteBar}/>
                    <HeaderButton name="Главная" refToView={goToRef}/>
                    <HeaderButton name="О нас" refToView={aboutUsRef}/>
                    <HeaderButton name="Услуги" refToView={servicesRef}/>
                    <HeaderButton name="Наши работы" refToView={portfolioRef}/>
                    <HeaderButton name="Контакты" refToView={contactsRef}/>
                    <div className={styles.mobileIcon}>
                        <img src={InstIconPurple} alt="Instagram"/>
                        <img src={TelIconPurple} alt="Call" />
                    </div>
                </div>
            </div>
            <div className={!siteBarCond ? styles.contentContainer : styles.noneDisplay}>
                <div className={styles.titleContainer}>
                    Мы сделаем Вашего
                    питомца <span>счастливым</span>
                </div>
                <div className={styles.textContainer}>
                    Профессиональный груминг салон Lapkins для собак и кошек
                </div>
                <Button>
                    <span>ЗАПИСАТЬСЯ</span>
                </Button>
            </div>
        </div>
    )
}


export default SiteHeader
