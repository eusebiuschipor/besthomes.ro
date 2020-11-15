import React from 'react';
import './FeaturedHouse.css';
import HouseRow from '../HouseRow/HouseRow.js';

function FeaturedHouse(props) {
    if (props.house) {
        return (
            <React.Fragment>
                <section>
                    <div className="container">
                        <div className="row featured-houses-row">
                            <HouseRow house={props.house} />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }

    return (<div>Nu există case recomandate momentan.</div>)
}

export default FeaturedHouse;