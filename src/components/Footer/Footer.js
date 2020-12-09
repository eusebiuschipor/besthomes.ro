import React from 'react';
import '../../index.css';

function Footer() {
    return (
        <React.Fragment>
            <section className="section-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <div className="widget-a">
                                <div className="w-header-a">
                                    <h3 className="w-title-a text-brand">BestHomes.ro</h3>
                                </div>
                                <div className="w-body-a">
                                    <p className="w-text-a color-text-a">
                                        Cele mai bune proprietăţi din România.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright-footer">
                                <p className="copyright color-text-a">
                                    © Copyright <span className="color-a">BestHomes.ro</span> Toate drepturile rezervate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;