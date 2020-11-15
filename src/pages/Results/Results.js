import React from 'react';
import HouseRow from '../../components/HouseRow/HouseRow.js';

function Results(props) {
    let houseRows = null;

    if (props.filteredHouses) {
        houseRows = props.filteredHouses.map(house => 
            <HouseRow key={house.id.toString()} 
                house={house} />);
    } else {
        houseRows = 'Va rugam selectati orasul pentru care doriti sa vedeti proprietati.'
    }

    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="row featured-houses-row">
                    {houseRows}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Results;

