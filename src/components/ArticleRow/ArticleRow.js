import React from 'react';
import './ArticleRow.css';
import { Link } from "react-router-dom";

function ArticleRow(props) {    
    return (
        <div className="col-lg-4 text-center">
            <Link to={`/articol/${props.article.id}`}>
                <div className="result-item">
                    <div className="carousel-item-b">
                        <div className="card-box-a card-shadow">
                            <div className="img-box-a result-img-box">
                                <img src={`../${props.article.image}`} alt="" className="img-a featured-home-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to={`/proprietate/${props.article.id}`}>
                <div className="element-title">
                    {props.article.title}
                </div>
            </Link>
        </div>
    );
}

export default ArticleRow;