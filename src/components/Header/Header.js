import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

function Home(props) {
    return (
        <header className="row">
            <div className="col-md-5">
                <Link className="logo-link" to="/">
                    <h1 className="logo">bestHomes.ro</h1>
                </Link>
            </div>
            <div className="col-md-7 mt-5 subtitle">
                {props.subtitle}
            </div>
        </header>
    );
}

export default Home;