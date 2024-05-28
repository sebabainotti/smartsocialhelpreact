import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

const ListCauses = (props) => {
    return (
        <div>
            <Header btn='create' />
            <header id="gtco-header" className="gtco-cover" role="banner" style={{ backgroundImage: 'url(images/img_bg_1.jpg)', height: '100px' }}>
                <div className="gtco-container">
                </div>
            </header>
            <div id="gtco-features">
                <div className="gtco-container">
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
            <Footer />
        </div>
    );
}

export default ListCauses;