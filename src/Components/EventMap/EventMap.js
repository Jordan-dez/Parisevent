import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'
import StyleEventMap from "./EventMap.module.css";

const EventMap = ({positions,address_street,address_city,address_zipcode}) => {
    console.log("position map",positions);
    const position =[positions.lat, positions.lon];
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className={`${StyleEventMap.leafletContainer}`}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    {address_street} {address_zipcode} {address_city} 
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default EventMap