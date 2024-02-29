import {useEffect, useState} from 'react';
import axios from "axios";

// const rapidApiKey = process.env.EXPO_RAPID_API_KEY;
const UseFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': "cdeb751bb9msh60e372968356217p1d57efjsn4d4a41660c13",
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
                setData(response.data.data);
                setIsLoading(false);
        } catch (error) {
            setError(error)
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const reFetch = () => {
        setIsLoading(true);
        fetchData();
    }
    return {data, isLoading, error, reFetch};
};

export default UseFetch;