import React, { Component } from 'react';
import './HouseRow.css';
import { Link } from "react-router-dom";

class HouseRow extends Component {
    render() {
        const house = this.props.house;

        return (
            <Link to={`/proprietate/${house.id}`}
                className="link-property">
                <div>
                    <div className="row house">
                        <div className="col-md-2">
                            <img src={house.photo} 
                                alt="" 
                                className="featuredHouseMainImage" />
                        </div>
                        <div className="col-md-10">
                            <p className="title"><strong>{house.title}</strong></p>
                            <p className="price">{house.price}</p>
                            <p className="description">{house.description}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default HouseRow;