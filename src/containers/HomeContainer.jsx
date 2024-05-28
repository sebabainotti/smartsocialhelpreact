import React, { useEffect, useState } from 'react';
import DataService from '../services/DataService';
import Home from '../pages/Home';

const HomeContainer = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Llamada a la función del servicio para obtener los datos
        DataService.fetchFeaturedCauses()
            .then((response) => {
                setData(response);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return <Home data={data} />;
}

export default HomeContainer;