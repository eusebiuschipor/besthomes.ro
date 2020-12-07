import React from 'react';
import HouseFilter from '../../components/HouseFilter/HouseFilter.js';
import FeaturedHouse from '../../components/FeaturedHouse/FeaturedHouse.js';
import OurServices from '../../components/OurServices/OurServices.js';
import LatestArticles from '../../components/LatestArticles/LatestArticles.js';

function Homepage(props) {
    return (
        <React.Fragment>
            <HouseFilter cities={props.cities} 
                filterHouses={props.filterHouses}
                setCityFilter={props.setCityFilter} /> 
            <OurServices />
            <FeaturedHouse houses={props.houses} />
            <LatestArticles articles={props.articles} />
        </React.Fragment>
    );
}

export default Homepage;