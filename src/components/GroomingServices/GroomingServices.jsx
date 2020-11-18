import React from 'react'
import styles from './GroomingServices.module.css'
import serviceMainImg from '../../img/serviceMainImg.png'
import ServicePoint from '../ServicePoint/ServicePoint'
import HearImg from '../../img/hear.svg'
import SpaImg from '../../img/spa.svg'
import AnimalImg from '../../img/animalIcon.svg'
import GigienaImg from '../../img/gigena.svg'


const GroomingServices = () => (
    <div className={styles.container}>
        <div className={styles.header}>Услуги</div>
        <div className={styles.headerLabel}>Наш салон предоставляет следующие услуги для Ваших питомцев</div>
        <div className={styles.contentContainer}>
            <div className={styles.servicesRow}>
                <ServicePoint header={"Стрижка"}
                              text={"Гигиенические и модельные стрижки кошек и собак"}
                              img={HearImg}
                />
                <ServicePoint header={"Гигиена"}
                              text={"Стрижка и обработка когтей, экспресс линька, чистка зубов"}
                              img={GigienaImg}
                              reverse={true}
                />
            </div>

            <div className={styles.servicesRowCenter}>
                <img className={styles.serviceMainImg} src={serviceMainImg} alt={"DOG"}/>
            </div>

            <div className={styles.servicesRow}>
                <ServicePoint header={"SPA процедуры"}
                              text={"Мытье шерсти, аккуратное удаление колтунов и расчесывание"}
                              img={SpaImg}
                />

                <ServicePoint header={"Тримминг"}
                              text={"Особая процедура для опрятного внещнего вида и здоровья питомца"}
                              img={AnimalImg}
                              reverse={true}
                />
            </div>
        </div>

    </div>
)

export default GroomingServices