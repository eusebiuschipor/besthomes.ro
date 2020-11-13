import React from 'react';
import {Link} from "react-router-dom";

function HouseFilter(props) {
    function onSearchChange(e) {
        props.setCityFilter(e.target.value);
    }

    return (
        <div className="form-group row mt-3">
            <div className="offset-md-2 col-md-4">
                Caută casă în oraşul:
            </div>
            <div className="col-md-4">
                <select className="form-control"
                    onChange={onSearchChange}>
                        {props.cities.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
            </div>
            <Link to="/rezultate">
                <button type="button" 
                    className="btn btn-primary"
                    onClick={() => props.filterHouses() }>
                    Cauta
                </button>
            </Link>
        </div>
    );

}

export default HouseFilter;