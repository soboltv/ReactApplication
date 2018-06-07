import React from 'react';

const FlightDetail = ({flight}) => {
    if(!flight)
    return <div>Loading...</div>;
    return(
        <div>
            <div>{flight.from} to {flight.to} on {flight.date.toLocaleString()}</div>
            <div>{flight.airline}, ${flight.price.toFixed(2)}</div>
        </div>
    );
};

export default FlightDetail;