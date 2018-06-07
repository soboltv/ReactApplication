import React, {Component} from 'react';

class FilterPrice extends Component{
    constructor(props){
        super(props);

        this.state = {term: props.priceFilter};
    }

    render(){
        return(
            <div>
                <label>Price:</label>
                <select 
                  value={this.state.term} 
                  onChange={event => this.onSelectChange(event.target.value)}>
                    <option value="all">All</option>
                    <option value="less300">&lt;=$300</option>
                    <option value="more300">&gt;$300</option>
                </select>
            </div>
        );
    }

    onSelectChange(term){   
        this.setState({term});
        this.props.onPriceFilterChange(term);
    }
}

export default FilterPrice;