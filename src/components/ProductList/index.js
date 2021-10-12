import axios from "axios";
import { useState, useEffect } from "react";

const ProductList = () => {
    const [beers, setBeers] = useState([]);

    const getListOfBeers = () => {
        axios
            .get("https://api.punkapi.com/v2/beers")
            .then((response) => {
                console.log(response.data);
                setBeers(response.data);
            })
            .catch((error) => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    alert(error.response.data.message);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    alert("Error", error.message);
                }
            });
    };

    useEffect(() => {
        getListOfBeers();
    }, []);

    return beers.map((beer) => <div key={beer.id}>{beer.name}</div>);
};

export default ProductList;
