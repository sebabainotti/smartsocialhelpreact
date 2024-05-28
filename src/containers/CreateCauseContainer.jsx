import React, { useState } from 'react';
import DataService from '../services/DataService';
import CreateCause from '../pages/CreateCause';

const CreateCauseContainer = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [causeDescription, setCauseDescription] = useState('');
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
        if (whatsapp == "") {
            e += "Debes darnos un telefono de contacto.<br />"
        }
        if (causeDescription == "") {
            e += "No nos contaste la causa."
        }
        return e;
    }

    const cleanFields = async () => {
        setName('');
        setLastName('');
        setEmail('');
        setWhatsapp('');
        setCauseDescription('');
    }

    const handleSave = async () => {
        try {
            var errors = validateErrors();
            setErrors(errors);
            if (errors == "") {
                var id = await DataService.addPossibleCause(name, lastName, email, whatsapp, causeDescription);
                if (id != null) {
                    cleanFields();
                    alert('Tu causa ha sido guardada. La analizaremos y te contactaremos!');
                }
            }
        } catch (error) {
            alert('Hubo un error al guardar el perfil');
        }
    };

    return (<CreateCause
        name={name}
        lastName={lastName}
        email={email}
        whatsapp={whatsapp}
        causeDescription={causeDescription}
        setName={setName}
        setLastName={setLastName}
        setEmail={setEmail}
        setWhatsapp={setWhatsapp}
        setCauseDescription={setCauseDescription}
        onSave={handleSave}
        errors={errors} />);
}

export default CreateCauseContainer;