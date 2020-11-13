import React from 'react';
import HouseRow from '../HouseRow/HouseRow.js';
import './FeaturedHouse.css';

function FeaturedHouse(props) {
    if (props.house) {
        return (
            <div>
                <div className="row featuredHouse">
                    <h3 className="col-md-12 text-center">
                        Casă recomandată
                    </h3>
                </div>
                <HouseRow house={props.house} />
            </div>
        );
    }

    return (<div>Nu există case recomandate momentan.</div>)
}

export default FeaturedHouse;