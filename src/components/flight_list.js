import React from 'react';
import FlightListItem from './flight_list_item';

const FlightList = (props) => {
    const flightItems = props.flights.map((flight)=>{
        return (
            <FlightListItem 
                onFlightSelect={props.onFlightSelect}
                key={flight.id} 
                flight={flight}/>
            );
    });

    return (
    <ul>
        {flightItems}
    </ul>
    );
};

export default FlightList;