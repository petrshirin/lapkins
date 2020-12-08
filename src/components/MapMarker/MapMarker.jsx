import React, {useState} from 'react';

import {Marker, Popup} from 'react-mapbox-gl';
import MarkerIcon from '../../img/marker.svg'
import styles from './MapMarker.module.css'

const MapMarker = ({longitude, latitude}) => {
    const [vis, setVis] = useState(-1);

    const setVS = e => {
        setVis(e.currentTarget.dataset.vs);
    };

    return (
        <div>
            <a href={"https://yandex.ru/maps/-/CCUEB4F1sD"} target={"_blank"}>
                <Marker
                    style=""
                    coordinates={{
                        lng: longitude,
                        lat: latitude
                    }}
                    anchor="top"
                    onClick={setVS}
                    data-vs={vis * -1}
                >
                    <img src={MarkerIcon} alt={"Q"}/>
                </Marker>
                <Popup
                    coordinates={{
                        lng: longitude,
                        lat: latitude
                    }}
                >
                    <div className={styles.popup}>
                        <div className={styles.popupHeader}>г. Иркутск,</div>
                        ул. Дальневосточная, 29/1, <br/>
                        цокольный этаж
                    </div>
                </Popup>
            </a>
        </div>
    )
};

export default MapMarker;