import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FilterAirline from './components/filter_airline';
import FlightList from './components/flight_list';
import SearchFlights from './components/flights';
import FlightDetail from './components/flight_detail';
import FilterPrice from './components/filter_price';

class App extends Component{
    constructor(props){
        super(props);

        this.state = { 
            flights: [],
            selectedFlight: null,
            airlnFilter: '',
            priceFilter: 'all'
        };
    }

    componentDidMount() {
        this.flightSearch();
    }

    flightSearch(airLnTerm, priceTerm){
        let priceLow, priceHigh;
        if(priceTerm === 'less300')
            priceHigh = 300;
        if(priceTerm === 'more300')
            priceLow = 300;
        SearchFlights(airLnTerm, priceLow, priceHigh, (flights) => {
            this.setState({ 
                flights: flights,
                selectedFlight: flights.length > 0 ? flights[0] : null
            });
            
        });
    }

    render(){
        return(
            <div>
                <FilterAirline
                    airlnFilter = {this.state.airlnFilter}
                    onAirlineFilterChange={airlnFilter => {
                        this.setState({airlnFilter}); 
                        this.flightSearch(airlnFilter, this.state.priceFilter)}}/>
                <FilterPrice
                    priceFilter={this.state.priceFilter}
                    onPriceFilterChange={(priceFilter) => {
                        this.setState({priceFilter});
                        this.flightSearch(this.state.airlnFilter, priceFilter)}}/>
                <FlightDetail flight={this.state.selectedFlight}/>
                <FlightList 
                    onFlightSelect={selectedFlight => this.setState({selectedFlight})}
                    flights={this.state.flights} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));