import React, { Component } from 'react';
import './HouseRow.css';
import { Link } from "react-router-dom";

class HouseRow extends Component {
    render() {
        return (
            <Link to={`/proprietate/${this.props.house.id}`}>
                <div className="result-item">
                    <div className="carousel-item-b">
                        <div className="card-box-a card-shadow">
                            <div className="img-box-a result-img-box">
                                <img src={`../${this.props.house.photo}`} alt="" className="img-a featured-home-img" />
                            </div>
                            <div className="card-overlay">
                                <div className="card-overlay-a-content">
                                    <div className="card-header-a">
                                        <h2 className="card-title-a">
                                            {this.props.house.title}
                                        </h2>
                                    </div>
                                    <div className="card-body-a">
                                        <div className="price-box d-flex">
                                            <span className="price-a">{this.props.house.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default HouseRow;