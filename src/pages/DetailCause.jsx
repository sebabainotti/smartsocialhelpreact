import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Web3ModalConnect from '../components/Web3ModalConnect';

const DetailCause = (props) => {
    return (
        <div>
            <Header btn='list' />
            <header id="gtco-header" className="gtco-cover" role="banner" style={{ backgroundImage: 'url(../images/img_bg_1.jpg)', height: '100px' }}>
                <div className="gtco-container">
                </div>
            </header>
            <div id="gtco-features-2">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                            <h2>{props.data && props.data.title}</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-12">
                            <div className="panel-info">
                                <div className='data'>
                                    <span className='collected'>$4500</span> recaudados de $30000
                                </div>
                                <div className='buttons'>
                                    <a href="#" className='btn btn-success'>Donar</a>
                                    <a href="#" className='btn btn-success'>Compartir</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">

                            <div className="feature-left">
                                <p>{props.data && props.data.description}</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="gtco-video gtco-bg" style={{ backgroundImage: 'url(../images/img_1.jpg)' }}>
                                <a href="https://vimeo.com/channels/staffpicks/93951774" className="popup-vimeo"><i className="icon-video2"></i></a>
                                <div className="overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Web3ModalConnect />

            <Footer />
        </div>
    );
};

export default DetailCause;