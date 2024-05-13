import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

const ListCauses = () => {
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
                        <Card title="Ayudemos a Juan Siprioco" image="ruedas.png" />
                        <Card title="Vamos por mas alimentos al comedor Juan Perez" image="comedor.png" />
                        <Card title="Los chicos de la aldea necesitan tu ayuda" image="africa.png" />
                        <Card title="Ayudemos a Juan Siprioco" image="ruedas.png" />
                        <Card title="Vamos por mas alimentos al comedor Juan Perez" image="comedor.png" />
                        <Card title="Los chicos de la aldea necesitan tu ayuda" image="africa.png" />
                        <Card title="Ayudemos a Juan Siprioco" image="ruedas.png" />
                        <Card title="Vamos por mas alimentos al comedor Juan Perez" image="comedor.png" />
                        <Card title="Los chicos de la aldea necesitan tu ayuda" image="africa.png" />
                        <Card title="Ayudemos a Juan Siprioco" image="ruedas.png" />
                        <Card title="Vamos por mas alimentos al comedor Juan Perez" image="comedor.png" />
                        <Card title="Los chicos de la aldea necesitan tu ayuda" image="africa.png" />

                    </div>


                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ListCauses;