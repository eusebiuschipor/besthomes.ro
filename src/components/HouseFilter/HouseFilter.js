import React from 'react';
import {Link} from "react-router-dom";
import HouseFilterBackground from '../../images/house-filter-background.jpg'

function HouseFilter(props) {
    function onSearchChange(e) {
        props.setCityFilter(e.target.value);
    }

    return (
        <React.Fragment>
            <div className="intro intro-carousel">
                <div className="owl-carousel owl-theme">
                    <div className="carousel-item-a intro-item bg-image" style={{background: `url(${HouseFilterBackground})`}}>
                        <div className="overlay overlay-a"></div>
                        <div className="intro-content display-table">
                            <div className="table-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12"> 
                                            <h1 className="intro-title mb-4 text-center">
                                                <span className="color-b">Găseşte-ţi</span> casa de vis
                                            </h1>
                                            <p className="intro-title-top text-center">Aici sunt publicate cele mai bune proprietăţi din România</p>
                                            <div className="home-house-filter">
                                                <select className="form-control form-control-lg form-control-a"
                                                    onChange={onSearchChange}>
                                                    {props.cities.map((c) => <option key={c} value={c}>{c}</option>)}
                                                </select>
                                            </div>
                                            <div className="home-search-button">
                                                <Link to="/rezultate">
                                                    <button type="submit" 
                                                        className="btn btn-b"
                                                        onClick={() => props.filterHouses() }>Caută</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default HouseFilter;