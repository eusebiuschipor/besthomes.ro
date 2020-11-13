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
        <div className="mt-2">
            <table className="table table-hover">
                <tbody>
                    {houseRows}
                </tbody>
            </table>
        </div>
    );
}

export default Results;

