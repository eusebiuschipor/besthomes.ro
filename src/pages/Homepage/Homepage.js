import React from 'react';
import HouseFilter from '../../components/HouseFilter/HouseFilter.js';
import FeaturedHouse from '../../components/FeaturedHouse/FeaturedHouse.js';
import OurServices from '../../components/OurServices/OurServices.js';

function Homepage(props) {
    return (
        <React.Fragment>
            <HouseFilter cities={props.cities} 
                filterHouses={props.filterHouses}
                setCityFilter={props.setCityFilter} /> 
            <OurServices />
            <FeaturedHouse houses={props.houses} />
        </React.Fragment>
    );
}

export default Homepage;