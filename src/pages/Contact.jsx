import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = ({ name, lastName, email, subject, message, setName, setLastName, setEmail, setSubject, setMessage, onSave, errors }) => {
    return (
        <>
            <Header btn='list' selected="contact" />
            <header id="gtco-header" className="gtco-cover" role="banner" style={{ backgroundImage: 'url(images/img_bg_1.jpg)', height: '100px' }}>
                <div className="gtco-container">
                </div>
            </header>
            <div className="gtco-section">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Contactanos</h3>
                            <div className="errors" dangerouslySetInnerHTML={{ __html: errors }} style={{ display: errors === '' ? 'none' : 'block' }}></div>
                            <form action="#">
                                <div className="row form-group">
                                    <div className="col-md-6">
                                        <label for="fname">Nombre</label>
                                        <input type="text" value={name} id="fname" className="form-control" placeholder="Tu nombre" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="lname">Apellido</label>
                                        <input type="text" value={lastName} id="lname" className="form-control" placeholder="Tu apellido" onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label for="email">Email</label>
                                        <input type="text" value={email} id="email" className="form-control" placeholder="Tu direccion de correo" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label for="subject">Título del mensaje</label>
                                        <input type="text" value={subject} id="subject" className="form-control" placeholder="El título de tu mensaje" onChange={(e) => setSubject(e.target.value)} />
                                    </div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <label for="message">Mensaje</label>
                                        <textarea name="message" value={message} id="message" cols="30" rows="10" className="form-control" placeholder="Cuentanos" onChange={(e) => setMessage(e.target.value)}></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="button" onClick={onSave} value="Enviar Mensaje" className="btn btn-primary" />
                                </div>

                            </form>
                        </div>
                        <div className="col-md-5 col-md-push-1">

                            <div className="gtco-contact-info">
                                <h3>Información de contacto</h3>
                                <ul>
                                    <li className="address">08290 Cerdanyola del Valles, <br /> Pablo Picasso nro 4</li>
                                    <li className="phone"><a href="tel://1234567920">+34 689348169</a></li>
                                    <li className="email"><a href="mailto:info@yoursite.com">smartsocialhelp@gmail.com</a></li>
                                    <li className="url"><a href="https://www.smartsocialhelp.com">smartsocialhelp.com</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;