import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CreateCause = () => {
    return (
        <div>
            <Header btn='list' />
            <header id="gtco-header" className="gtco-cover" role="banner" style={{ backgroundImage: 'url(images/img_bg_1.jpg)', height: '100px' }}>
                <div className="gtco-container">
                </div>
            </header>
            <div className="gtco-section">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Completa la siguiente información para validar tu causa.</h3>
                            <form action="#">
                                <div className="row form-group">
                                    <div className="col-md-6">
                                        <label for="fname">Nombre</label>
                                        <input type="text" id="fname" className="form-control" placeholder="Tu nombre" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="lname">Apellido</label>
                                        <input type="text" id="lname" className="form-control" placeholder="Tu apellido" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label for="email">Email de contacto</label>
                                        <input type="text" id="email" className="form-control" placeholder="Tu dirección de correo electronico" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label for="email">Whatsapp</label>
                                        <input type="text" id="phone" className="form-control" placeholder="Telefono para que te contactemos" />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label for="message">Contanos porque necesitas donaciones</label>
                                        <textarea name="message-l" id="message-l" cols="30" rows="10" className="form-control" placeholder="Describe con el mayor detalle posible"></textarea>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input type="submit" value="Enviar a revisión" className="btn btn-primary" />
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CreateCause;