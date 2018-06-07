import React, {Component} from 'react';

class FilterAirline extends Component{
    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    render (){
        return(
            <div>
                <label>Airline:</label>
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term){   
        this.setState({term});
        this.props.onAirlineFilterChange(term);
    }
}

export default FilterAirline;