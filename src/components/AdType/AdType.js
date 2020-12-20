import React from 'react';

function AdType(props) {
    return (
        <label className={`btn btn-secondary ${props.adType === parseInt(props.currentAd.id) ? "active" : ""}`}
            onChange={props.handleAdTypeChange}>
            <input type="radio" 
                name="options" 
                id={props.currentAd.id} /> 
            {props.currentAd.name.charAt(0).toUpperCase() + props.currentAd.name.slice(1)}
        </label>
    );
}

export default AdType;