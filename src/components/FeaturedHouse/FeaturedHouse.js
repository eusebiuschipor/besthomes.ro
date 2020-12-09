import React from 'react';
import './FeaturedHouse.css';
import HouseRow from '../HouseRow/HouseRow.js';

function FeaturedHouse(props) {
    let houseRows = null;

    if (props.houses) {
        houseRows = props.houses.map(house =>
            <HouseRow key={house.id.toString()}
                house={house} />);
    }

    return (
        <React.Fragment>
            <div className="container home-section">
                <h2 className="title-a">Proprietăţi recomandate:</h2>
                <div className="row">
                    {houseRows}
                </div>
            </div>
        </React.Fragment>
    );
}

export default FeaturedHouse;