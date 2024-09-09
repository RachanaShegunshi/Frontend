import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="py-4" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="d-lg-flex justify-content-between py-3 py-lg-2">
                        <div className="small mb-2 mb-lg-0">
                            <p className="text-muted mb-0 me-5">© 2023 FreeFrontend.dev. All rights reserved.</p>
                        </div>
                        <div className="d-flex small align-items-end justify-content-between">
                            <div>
                                <a className="d-block d-lg-inline text-muted ms-lg-3 mb-2 mb-lg-0" href="#">Privacy Policy</a>
                                <a className="d-block d-lg-inline text-muted ms-lg-3 mb-2 mb-lg-0" href="#">Terms</a>
                                <a className="d-block d-lg-inline text-muted ms-lg-3 mb-2 mb-lg-0" href="#">Cookies</a>
                                <a className="d-block d-lg-inline text-muted ms-lg-3" href="#">Sitemap</a>
                            </div>
                            <div className="d-none d-lg-block ms-3">
                                <a className="me-2" href="#">
                                    {/* Add your SVG icons here */}
                                </a>
                            </div>
                            <div className="d-lg-none">
                                <a className="me-2" href="#">
                                    {/* Add your SVG icons here */}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
