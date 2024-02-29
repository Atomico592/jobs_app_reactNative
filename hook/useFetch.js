import {useEffect, useState} from 'react';
import axios from "axios";

const rapidApiKey = process.env["EXPO_RAPID_API_KEY "];
const UseFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            if (response.data) {
                setData(response.data);
                setIsLoading(false);
            }
            return [];
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