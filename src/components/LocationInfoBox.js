import React from 'react'

function LocationInfoBox({info}) {
    return (
        <div className='location-info'>
            <h2>Event Location</h2>
            <ul>
                <li>TITLE: <strong>{info.title}</strong></li>
                <li>ID: <strong>{info.id}</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
