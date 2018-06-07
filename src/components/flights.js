function Flight(id, from, to, airline, price, date){
    this.id = id;
    this.from = from;
    this.to = to;
    this.airline = airline;
    this.price = price;
    this.date = date;
};

function SearchFlights(airlnTerm, low, high, callback){
    let flights = [];
    flights.push(new Flight(0, "SEA", "MSP", "Delta", 300, new Date(2018, 6, 15)));
    flights.push(new Flight(1, "SEA", "HNL", "Hawaii Air", 700, new Date(2018, 7, 17)));

    if(airlnTerm)
        flights = flights.filter(flt => {return flt.airline.startsWith(airlnTerm)});
    if(low)
        flights = flights.filter(flt => {return flt.price > low});
    if(high)
        flights = flights.filter(flt =>{return flt.price <= high})
    callback(flights);
};

export default SearchFlights;