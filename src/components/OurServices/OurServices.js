import React from 'react';
import './OurServices.css';

function OurServices() {
    
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 element text-center">
                        <i className="fas fa-house-user fa-5x" />
                        <div className="title">Închiriază</div>
                        <div className="content">
                            Îţi oferim cele mai bune proprietăţi pentru închiriere.
                        </div>
                    </div>
                    <div className="col-lg-4 element text-center">
                        <i className="fas fa-home fa-5x"></i>
                        <div className="title">Cumpără</div>
                        <div className="content">
                            Găseşte cele mai bune proprietăţi pentru a cumpăra.
                        </div>
                    </div>
                    <div className="col-lg-4 element text-center">
                        <i className="fas fa-laptop-house fa-5x"></i>
                        <div className="title">Adaugă anunţ</div>
                        <div className="content">
                            Poţi adăuga anunţuri simplu şi rapid.
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OurServices;