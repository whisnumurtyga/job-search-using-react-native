import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from "@env";

// const rapidApiKey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
    const [ data, setData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    // const axios = require('axios');

    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            "X-RapidAPI-Key":"ff89817ad4msh03d492041e121fcp1d2c50jsn6811df276fff",
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await axios.request(options);
            // console.log(response.data);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            // console.error(error);
            setError(error)
            console.log(error)
            alert("There is an error")
        } finally {
            setIsLoading(false)
        }
    }

    useEffect( () => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch }
}

export default useFetch;