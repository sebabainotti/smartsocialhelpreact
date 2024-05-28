import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CreateCause = ({ name, lastName, email, whatsapp, causeDescription, setName, setLastName, setEmail, setWhatsapp, setCauseDescription, onSave, errors }) => {
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
                            <div className="errors" dangerouslySetInnerHTML={{ __html: errors }} style={{ display: errors === '' ? 'none' : 'block' }}>
                            </div>
                            <form action="#">
                                <div className="row form-group">
                                    <div className="col-md-6">
                                        <label for="fname">Nombre</label>
                                        <input type="text" required value={name} id="fname" className="form-control" placeholder="Tu nombre" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="lname">Apellido</label>
                                        <input type="text" value={lastName} id="lname" className="form-control" placeholder="Tu apellido" onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label for="email">Email de contacto</label>
                                        <input type="text" value={email} id="email" className="form-control" placeholder="Tu dirección de correo electronico" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label for="text">Whatsapp</label>
                                        <input type="text" value={whatsapp} id="phone" className="form-control" placeholder="Telefono para que te contactemos" onChange={(e) => setWhatsapp(e.target.value)} />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label for="message">Contanos porque necesitas donaciones</label>
                                        <textarea name="message-l" value={causeDescription} id="message-l" cols="30" rows="10" className="form-control" onChange={(e) => setCauseDescription(e.target.value)} placeholder="Describe con el mayor detalle posible"></textarea>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input type="button" onClick={onSave} value="Enviar a revisión" className="btn btn-primary" />
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