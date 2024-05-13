import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Home = () => {
    return (
        <>
            <Header btn='create' />
            <header id="gtco-header" className="gtco-cover" role="banner" style={{ backgroundImage: 'url(images/img_bg_1.jpg)' }}>
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <div className="display-t">
                                <div className="display-tc">
                                    <h1>SmartSocialHelp</h1>
                                    <h2>Conectando sentimientos, <a href="http://gettemplates.co/" target="_blank">impulsando el
                                        cambio.</a></h2>
                                    <p><a href="/list" className="btn btn-default">Ver Causas</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div id="gtco-features">
                <div className="gtco-container">
                    <div className="row"><div className="col-md-8 col-md-offset-2 text-center gtco-heading"><h2>Causas destacadas</h2></div></div>
                    <div className="row">
                        <Card title="Ayudemos a Juan Siprioco" image="ruedas.png" heartAmount="526" total="526" collected="100" />
                        <Card title="Vamos por mas alimentos al comedor Juan Perez" image="comedor.png" heartAmount="1524" total="3000" collected="1200" />
                        <Card title="Los chicos de la aldea necesitan tu ayuda" image="africa.png" heartAmount="10253" total="10000" collected="6000" />
                    </div>
                </div>
            </div>
            <div className="phrase-section" style={{ backgroundImage: 'url(images/img_bg_3.jpg)' }}>
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="display-t">
                                <div className="display-tc" data-animate-effect="fadeIn">
                                    <h1>"La educación es el arma más poderosa que puedes usar para cambiar el mundo."</h1>
                                    <h2>Nelson Mandela</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;