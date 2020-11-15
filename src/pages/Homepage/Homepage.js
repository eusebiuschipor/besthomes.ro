import React from 'react';
import HouseFilter from '../../components/HouseFilter/HouseFilter.js';
import FeaturedHouse from '../../components/FeaturedHouse/FeaturedHouse.js';

function Homepage(props) {
    return (
        <React.Fragment>
            <HouseFilter cities={props.cities} 
                filterHouses={props.filterHouses}
                setCityFilter={props.setCityFilter} /> 
            <FeaturedHouse house={props.house} />
        </React.Fragment>
    );
}

export default Homepage;