import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import {useState} from 'react'
    
    const Map = ({eventData, center, zoom}) => {

    const [location,setLocation] = useState(null)
    const markers = eventData.map ((ev,index) => {
        if(ev.categories[0].id == 8) {
            // console.log(ev.title);
            // console.log(ev.geometries[0].coordinates[1],ev.geometries[0].coordinates[0])
            // ev.geometries[0].coordinates.forEach(i => console.log(i[0]))
            return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={()=>setLocation({id: ev.id, title: ev.title}) }/>      
        } 
        return null
    })

    return (
        <div className='map'>
            <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyALbMARLMt4hqqLT8E3SwDHkV-0e-uW7vE' }}
            defaultCenter={center}
            defaultZoom={zoom}
            >
            {markers}
            <LocationMarker lat={center.lat} lng={center.lng}/>
            {location && <LocationInfoBox info= {location} />}
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat:56.653 ,
        lng:161.36
    },
    zoom:6,
}

export default Map
