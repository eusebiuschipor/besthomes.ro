import React from 'react';
import FeaturedHouse from '../../components/FeaturedHouse/FeaturedHouse.js';

function Homepage(props) {
    return (
        <FeaturedHouse house={props.house} />
    );
}

export default Homepage;