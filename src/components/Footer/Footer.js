import React from 'react';
import '../../index.css';

function Footer() {
    return (
        <React.Fragment>
            <section class="section-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12">
                            <div class="widget-a">
                                <div class="w-header-a">
                                    <h3 class="w-title-a text-brand">BestHomes.ro</h3>
                                </div>
                                <div class="w-body-a">
                                    <p class="w-text-a color-text-a">
                                        Cele mai bune proprietăţi din România.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="copyright-footer">
                                <p class="copyright color-text-a">
                                    © Copyright <span class="color-a">BestHomes.ro</span> Toate drepturile rezervate.
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