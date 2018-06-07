import React from 'react';

const FlightListItem = ({flight, onFlightSelect})=>{
    return (
        <li onClick={() => onFlightSelect(flight)}> 
            {flight.from} to {flight.to} - ${flight.price.toFixed(2)}
        </li>
    );
};

export default FlightListItem;