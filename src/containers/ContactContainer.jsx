import React, { useState } from 'react';
import DataService from '../services/DataService';
import Contact from '../pages/Contact';

const ContactContainer = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState('');

    const validateErrors = () => {
        let e = "";
        if (name == "") {
            e += "Debes agregar un Nombre. <br />"
        }
        if (lastName == "") {
            e += "Debes agregar un Apellido.<br />"
        }
        if (email == "") {
            e += "Debes agregar un Email.<br />"
        }
        if (subject == "") {
            e += "Dime porque nos contactas.<br />"
        }
        if (message == "") {
            e += "No nos contaste el motivo por el que nos contactas."
        }
        return e;
    }

    const cleanFields = async () => {
        setName('');
        setLastName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    const handleSave = async () => {
        try {
            var errors = validateErrors();
            setErrors(errors);
            if (errors == "") {
                var id = await DataService.addContact(name, lastName, email, subject, message);
                if (id != null) {
                    cleanFields();
                    alert('Tu mensaje ha sido guardado. Te contactaremos pronto!');
                }
            }
        } catch (error) {
            alert('Hubo un error al enviar el mensaje');
        }
    };

    return (<Contact
        name={name}
        lastName={lastName}
        email={email}
        subject={subject}
        message={message}
        setName={setName}
        setLastName={setLastName}
        setEmail={setEmail}
        setSubject={setSubject}
        setMessage={setMessage}
        onSave={handleSave}
        errors={errors} />);
}

export default ContactContainer;