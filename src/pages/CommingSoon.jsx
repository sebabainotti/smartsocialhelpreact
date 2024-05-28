import React from 'react';

const CommingSoon = () => {
    return (
        <>
            <nav className="gtco-nav" role="navigation">
                <div className="gtco-container">
                    <div className="row">
                        <div class="col-xs-2">
                            <div id="gtco-logo"><a href="index.html">
                                <img src={`/images/ssh1250.png`} style={{ width: '60px' }}></img>
                            </a></div>
                        </div>
                    </div>

                </div>
            </nav>

            <header id="gtco-header" className="gtco-cover" role="banner" style={{ backgroundImage: 'url(images/img_bg_1.jpg)' }}>
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <div className="display-t">
                                <div className="display-tc animate-box fadeIn animated-fast" data-animate-effect="fadeIn">
                                    <h1>SmartSocial<span>Help</span></h1>
                                    <h2>Comming Soon</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default CommingSoon;