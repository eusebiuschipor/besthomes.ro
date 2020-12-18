import React from 'react';
import {Link} from "react-router-dom";
import HouseFilterBackground from '../../images/house-filter-background.jpg'
import './HouseFilter.css';

function HouseFilter(props) {
    const [city, setCity] = React.useState({});
    const [houseType, setHouseType] = React.useState({});

    React.useEffect(() => {
        if (props.cities.length) {
            setCity(props.cities[0].id);
        }

        if (props.houseTypes.length) {
            setHouseType(props.houseTypes[0].name);
        }
    }, [props.cities, props.houseTypes]);

    function onCityChange(e) {
        setCity(e.target.value);
    }

    function onHouseTypeChange(e) {
        setHouseType(e.target.value);
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
                                            <div className="home-house-filter row">
                                                <div className="element-search col-lg-4 col-md-12 col-sm-12">
                                                    <select className="form-control form-control-lg form-control-a"
                                                        onChange={onCityChange}>
                                                        {props.cities.map((c) => <option key={c.id} value={c.id}>{c.city}</option>)}
                                                    </select>
                                                </div>
                                                <div className="element-search col-lg-4 col-md-12 col-sm-12">
                                                    <select className="form-control form-control-lg form-control-a"
                                                        onChange={onHouseTypeChange}>
                                                        {props.houseTypes.map((c) => 
                                                            <option key={c.id} value={c.name}>{c.name.charAt(0).toUpperCase() + c.name.slice(1)}</option>)}
                                                    </select>
                                                </div>
                                                <div className="element-button col-lg-4 col-md-12 col-sm-12">
                                                    <div className="home-search-button">
                                                        <Link to={`/rezultate/${city}/${houseType}`}>
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
                </div>
            </div>
        </React.Fragment>
    );

}

export default HouseFilter;