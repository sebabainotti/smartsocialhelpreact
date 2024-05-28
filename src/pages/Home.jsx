import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Home = (props) => {
    return (
        <>
            <Header btn='create' selected='home' />
            <header id="gtco-header" className="gtco-cover" role="banner" style={{ backgroundImage: 'url(images/img_bg_1.jpg)' }}>
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center">
                            <div className="display-t">
                                <div className="display-tc">
                                    <h1><span>Smart</span>SocialHelp</h1>
                                    <h2>Conectando sentimientos, <span>impulsando el
                                        cambio.</span></h2>
                                    <p><a href="/list" className="btn btn-default">Ver Causas</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div id="gtco-features">
                <div className="gtco-container">
                    <div className="row"><div className="col-md-8 col-md-offset-2 text-center gtco-heading"><h2>Descubre misiones</h2></div></div>
                    <div className="row">
                        {props.data ? (
                            props.data.map((item, index) => (
                                <Card key={index} id={item.id} title={item.title} image={item.image} description={item.description} heartAmount={item.heart} total={item.total} collected={item.collected} />
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="phrase-section">
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