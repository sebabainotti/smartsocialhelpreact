import React, { useEffect, useState } from 'react';
import DataService from '../services/DataService';
import ListCauses from '../pages/ListCauses';

const ListCausesContainer = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Llamada a la función del servicio para obtener los datos
        DataService.fetchAllCauses()
            .then((response) => {
                setData(response);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return <ListCauses data={data} />;
}

export default ListCausesContainer;