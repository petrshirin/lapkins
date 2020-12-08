import {React} from 'react'
import styles from './GroomingServices.module.css'
import serviceMainImg from '../../img/serviceMainImg.png'
import ServicePoint from '../ServicePoint/ServicePoint'
import HearImg from '../../img/hear.svg'
import SpaImg from '../../img/spa.svg'
import AnimalImg from '../../img/animalIcon.svg'
import GigienaImg from '../../img/gigena.svg'

import HearImgMobile from '../../img/HearImgMobile.svg'
import SpaImgMobile from '../../img/SpaImgMobile.svg'
import AnimalImgMobile from '../../img/AnimalImgMobile.svg'
import GigienaImgMobile from '../../img/GigienaImgMobile.svg'

import useWindowDimensions from "../../utils/resize"
import Button from '../../components/Button/Button'

const GroomingServices = ({goToRef}) =>  {
    const { height, width } = useWindowDimensions();
    console.log(width)

    return (
        <div className={styles.container} id={goToRef}>
            <div className={styles.header}>Услуги</div>
            <div className={styles.headerLabel}>Наш салон предоставляет следующие услуги для Ваших питомцев</div>
            <div className={styles.contentContainer}>
                <div className={styles.servicesRow}>
                    <ServicePoint header={"Стрижка"}
                                  text={"Гигиенические и модельные стрижки кошек и собак"}
                                  img={width > 1000 ? HearImg : HearImgMobile}
                    />
                    <ServicePoint header={"Гигиена"}
                                  text={"Стрижка и обработка когтей, экспресс линька, чистка зубов"}
                                  img={width > 1000 ? GigienaImg : GigienaImgMobile}
                                  reverse={true}
                    />
                </div>

                <div className={styles.servicesRowCenter}>
                    <img className={styles.serviceMainImg} src={serviceMainImg} alt={"DOG"}/>
                </div>

                <div className={styles.servicesRow}>
                    <ServicePoint header={"SPA процедуры"}
                                  text={"Мытье шерсти, аккуратное удаление колтунов и расчесывание"}
                                  img={width > 1000 ? SpaImg : SpaImgMobile}
                    />

                    <ServicePoint header={"Тримминг"}
                                  text={"Особая процедура для опрятного внещнего вида и здоровья питомца"}
                                  img={width > 1000 ? AnimalImg : AnimalImgMobile}
                                  reverse={true}
                    />
                </div>
                <div className={styles.servicesRowCenter} style={{marginTop: "30px"}}>
                    <Button>
                        <a href={"https://n376264.yclients.com/company:358241?o=m1053307s6331068,6330915,5837140d2022111000"} target={"_blank"}>
                            <span>ЗАПИСАТЬСЯ</span>
                        </a>

                    </Button>
                </div>
            </div>

        </div>

    )
}


export default GroomingServices