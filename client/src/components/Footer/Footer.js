import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="bg-dark text-center text-white">
                    {/* <!-- Grid container --> */}
                    <div className="container p-4 pb-0">
                        {/* <!-- Section: Social media --> */}
                        <section className="mb-2">
                            
                        </section>
                        {/* <!-- Section: Social media --> */}
                    </div>
                    {/* <!-- Grid container --> */}

                    {/* <!-- Copyright --> */}
                    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2);"}}>
                        © 2022 Copyright:
                        <a className="text-white" href="https://www.thcsminhdam.ga/">THCS MINH ĐẠM</a>
                    </div>
                    {/* <!-- Copyright --> */}
                </footer>
            </>
        );
    }
}

export default Footer;