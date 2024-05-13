import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        try {
            await axios.post('http://localhost:3001/send-email', { name, email, message });
            setIsSent(true);
            alert('Correo enviado correctamente');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error(error);
            alert('Error al enviar el correo');
        }
        setIsSending(false);
    };

    return (
        <form name="contactForm" id="contactForm" method="post" onSubmit={handleSubmit}>
            <div className="form-field animate-this">
                <input name="contactName" type="text" id="contactName" value={name} placeholder="Nombre" defaultValue=""
                    minLength="2" required="" onChange={handleNameChange} />
            </div>
            <div className="form-field animate-this">
                <input name="contactEmail" type="email" id="contactEmail" value={email} placeholder="Email" defaultValue=""
                    required="" onChange={handleEmailChange} />
            </div>
            <div className="form-field animate-this">
                <textarea name="contactMessage" value={message} id="contactMessage" placeholder="Mensaje" rows="10" cols="50"
                    required="" onChange={handleMessageChange}></textarea>
            </div>

            <div className="form-field animate-this">
                <button type="submit" className="submitform" disabled={isSending}>{isSending ? 'Enviando...' : 'Enviar'}</button>
                {isSent && <p>Mensaje enviado correctamente.</p>}
            </div>
        </form>
    )
};
export default ContactForm;