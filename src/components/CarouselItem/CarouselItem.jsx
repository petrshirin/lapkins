import React from "react";
import styles from './CarouselItem.module.css'


const CarouselItem = ({src, id}) => {
    return (
        <div className={styles.container} key={id}>
            <img src={src} alt={id} />
        </div>
    )}

export default CarouselItem


