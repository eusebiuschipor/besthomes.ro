import React from 'react';
import './HouseRow.css';
import { Link } from "react-router-dom";

function HouseRow(props) {
    let dots = '...';

    if (props.house.title.length <= 40) {
        dots = '';
    }

    return (
        <div className="col-lg-4 text-center property">
            <Link to={`/proprietate/${props.house.id}`}>
                <div className="result-item">
                    <div className="carousel-item-b">
                        <div className="card-box-a card-shadow">
                            <div className="img-box-a result-img-box">
                                <img src={`${process.env.REACT_APP_SERVER_URL}/uploads/${props.house.id}/1.png`} alt="" className="img-a featured-home-img" />
                            </div>
                            <div className="card-overlay">
                                <div className="card-overlay-a-content">
                                    <div className="card-body-a">
                                        <div className="price-box d-flex">
                                            <span className="price-a">{props.house.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to={`/proprietate/${props.house.id}`}>
                <div className="property-title">
                    {props.house.title.substring(0, 80)} {dots}
                </div>
            </Link>
        </div>
    );
}

export default HouseRow;