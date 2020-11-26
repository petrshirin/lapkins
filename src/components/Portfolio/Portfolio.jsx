import React from "react";
import styles from './Portfolio.module.css'
import Carousel from 'react-elastic-carousel';
import CarouselItem from "../CarouselItem/CarouselItem";

import Img1 from '../../img/portfolioImages/1.jpg'
import Img2 from '../../img/portfolioImages/2.jpg'
import Img3 from '../../img/portfolioImages/3.jpg'
import Img4 from '../../img/portfolioImages/4.jpg'
import Img5 from '../../img/portfolioImages/5.jpg'
import Img6 from '../../img/portfolioImages/6.jpg'
import Img7 from '../../img/portfolioImages/7.jpg'
import Img8 from '../../img/portfolioImages/8.jpg'
import Img9 from '../../img/portfolioImages/9.jpg'
import useWindowDimensions from "../../utils/resize"

const Portfolio = ({goToRef}) => {
    const { height, width } = useWindowDimensions();
    const items = [
        {id: 1, src: Img1},
        {id: 2, src: Img2},
        {id: 3, src: Img3},
        {id: 4, src: Img4},
        {id: 5, src: Img5},
        {id: 6, src: Img6},
        {id: 7, src: Img7},
        {id: 8, src: Img8},
        {id: 9, src: Img9}
    ]

    let itemsToShow = 3
    let itemsToScroll = 3
    if (width < 1000) {
        itemsToShow = 1
        itemsToScroll = 1
    }

    return (
    <div className={styles.container} id={goToRef}>
        <div className={styles.header}>Наши Работы</div>
            <Carousel itemsToShow={itemsToShow}  itemsToScroll={itemsToScroll}>
                {items.map(item => <CarouselItem key={item.id} src={item.src} />)}
            </Carousel>
    </div>
)}

export default Portfolio


