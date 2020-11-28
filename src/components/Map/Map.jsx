import React from 'react';

import ReactMapboxGl, {Layer, Feature, Marker, Popup} from 'react-mapbox-gl';
import "./Map.module.css";
import MapMarker from "../MapMarker/MapMarker";
import styles from './Map.module.css'

const ReactMap = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoianVsaWFzaHZhcnRzYmVyZyIsImEiOiJja2g3cHI1dmMwNnAyMnNuc2w5N3ByNnE1In0.N0jjx4ER6NWNKghAc-OMCQ'
});


const Map = ({width, height}) => (
    <div className={styles.container}>
        <ReactMap
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: height,
                width: width
            }}
            zoom={[15]}
            center={[104.299992, 52.260799]}>
            <MapMarker longitude={104.299992} latitude={52.262799}/>
        </ReactMap>
    </div>
)

export default Map