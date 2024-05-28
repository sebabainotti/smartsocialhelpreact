import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DataService from '../services/DataService';
import DetailCause from '../pages/DetailCause';

const DetailCauseContainer = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        // Llamada a la función del servicio para obtener los datos
        DataService.getCause(id)
            .then((response) => {
                setData(response);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return <DetailCause data={data} />;
}

export default DetailCauseContainer;