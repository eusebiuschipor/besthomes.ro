import React from 'react';

function HouseType(props) {
    return (
        <label className={`btn btn-secondary ${props.houseType === parseInt(props.house.id) ? "active" : ""}`}
            onChange={props.handleHouseTypeChange}>
            <i className={`house-type-icon fas ${props.house.icon} fa-10x`}></i>
            <input type="radio" 
                name="options" 
                id={props.house.id} /> 
            {props.house.name.charAt(0).toUpperCase() + props.house.name.slice(1)}
        </label>
    );
}

export default HouseType;