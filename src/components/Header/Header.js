import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import '../../index.css';
import { If, Then, Else } from 'react-if';

function Header() {
    const [showMobileNavigation, setShowMobileNavigation] = React.useState(false);
    const [mobileNavigationState, setMobileNavigationState] = React.useState('hide-mobile-navigation');

    const toggleShowMobileNavigation = () => {
        if (!showMobileNavigation) {
            setMobileNavigationState('show-mobile-navigation');
        } else {
            setMobileNavigationState('hide-mobile-navigation');
        }

        setShowMobileNavigation(!showMobileNavigation);
    }

    React.useEffect(() => {
        document.addEventListener('mousedown', clickInPage, false);
    }, []);

    const clickInPage = (e) => {
        if (e.srcElement.className !== 'hamburger-button' 
            && e.srcElement.className !== 'nav-link') {
            setMobileNavigationState('hide-mobile-navigation');
            setShowMobileNavigation(false);
        }
    }

    const requireAuth = () => {
        if (localStorage.getItem('email')) {
          return true;
        }
    
        return false;
    }

    return (
        <React.Fragment>
            <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
                <div class="container">
                    <button class="navbar-toggler collapsed hamburger-button" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarDefault" 
                        aria-controls="navbarDefault" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        onClick={()=> toggleShowMobileNavigation()}>
                        <span class="hamburger-button"></span>
                        <span class="hamburger-button"></span>
                        <span class="hamburger-button"></span>
                    </button>
                    <Link className="navbar-brand text-brand" 
                        to="/">
                        Best<span class="color-b">Homes</span>.ro
                    </Link>
                    <div className={`navbar-collapse navbar-menu ${mobileNavigationState}`} id="navbarDefault">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <If condition={requireAuth}>
                                    <Then>
                                        <Link to="/add-house" 
                                            className="nav-link"
                                            onClick={()=> toggleShowMobileNavigation()}>
                                            Adaugă anunţ
                                        </Link>
                                    </Then>
                                    <Else>
                                        <Link to="/login" 
                                            className="nav-link"
                                            onClick={()=> toggleShowMobileNavigation()}>
                                            Login
                                        </Link>
                                    </Else>
                                </If>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Header;