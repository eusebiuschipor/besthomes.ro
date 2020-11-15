import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import '../../index.css';

function Home() {
    return (
        <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
            <div className="container">
                <Link className="navbar-brand text-brand" to="/">
                    Best<span className="color-b">Homes</span>.ro
                </Link>
            </div>
        </nav>
    );
}

export default Home;