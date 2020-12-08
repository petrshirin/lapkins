import React, {useState} from 'react'
import styles from './siteHeader.module.css'
import Logo from "../logo/logo";
import InstIcon from "../../img/InstIcon.svg"
import TelIcon from "../../img/TelIcon.svg"
import HeaderButton from "../headerButton/headerButton";
import ExitIcon from "../../img/exit.svg"
import SiteBar from "../../img/siteBar.svg"
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
                    <HeaderButton name="Главная" refToView={goToRef} setSiteBarCond={setSiteBarCond}/>
                    <HeaderButton name="О нас" refToView={aboutUsRef} setSiteBarCond={setSiteBarCond}/>
                    <HeaderButton name="Услуги" refToView={servicesRef} setSiteBarCond={setSiteBarCond}/>
                    <HeaderButton name="Наши работы" refToView={portfolioRef} setSiteBarCond={setSiteBarCond}/>
                    <HeaderButton name="Контакты" refToView={contactsRef} setSiteBarCond={setSiteBarCond}/>
                </div>
                <div className={styles.socialNetworkContainer}>
                    <a target="_blank" href={"https://www.instagram.com/lapkins.irk/"}>
                        <img src={InstIcon} alt="Instagram"/>
                    </a>
                    <a target="_blank" href={"https://api.whatsapp.com/send?phone=79025660067"}>
                        <img src={TelIcon} alt="Call"/>
                    </a>
                </div>
            </div>
            <div className={styles.headerContainerMobile}>
                <Logo className={!siteBarCond ? styles.mobileSiteBar : styles.noneDisplay}/>
                <div className={!siteBarCond ? styles.mobileSiteBar : styles.noneDisplay} onClick={openCloseSiteBar}>
                    <img src={SiteBar} alt={"exit"}/>
                </div>
                <div className={!siteBarCond ? styles.noneDisplay : styles.headerButtonsMobile}>
                    <img className={!siteBarCond ? styles.noneDisplay : ""} src={ExitIcon} alt={"exit"}
                         onClick={openCloseSiteBar}/>
                    <HeaderButton name="Главная" refToView={goToRef} setSiteBarCond={setSiteBarCond}/>
                    <HeaderButton name="О нас" refToView={aboutUsRef} setSiteBarCond={setSiteBarCond}/>
                    <HeaderButton name="Услуги" refToView={servicesRef} setSiteBarCond={setSiteBarCond}/>
                    <HeaderButton name="Наши работы" refToView={portfolioRef} setSiteBarCond={setSiteBarCond}/>
                    <HeaderButton name="Контакты" refToView={contactsRef} setSiteBarCond={setSiteBarCond}/>
                    <div className={styles.mobileIcon}>
                        <a target="_blank" href={"https://www.instagram.com/lapkins.irk/"}>
                            <img src={InstIconPurple} alt="Instagram"/>
                        </a>
                        <a target="_blank" href={"https://api.whatsapp.com/send?phone=79025660067"}>
                            <img src={TelIconPurple} alt="Call"/>
                        </a>
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
                    <a href={"https://n376264.yclients.com/company:358241?o=m1053307s6331068,6330915,5837140d2022111000"} target="_blank">
                        <span>ЗАПИСАТЬСЯ</span>
                    </a>
                </Button>
            </div>
        </div>
    )
}


export default SiteHeader
