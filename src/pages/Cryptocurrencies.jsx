import React, { useEffect } from "react";
import axios from "axios";

export default function Cryptocurrencies() {

    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
            'tiers[0]': '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: '50',
            offset: '0'
        },
        headers: {
            'X-RapidAPI-Key': '2276dec5d9msha4514d2a5f75692p1e5181jsnda7948426efb',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };

    useEffect(()=> {
        axios.request(options)
            .then((response) => {
                const { data } = response.data
                console.log(data.coins)
            })
            .catch((err) => console.log(err));
    }, [])


    return (
        <h1>Cryptocurrencies page here</h1>
    )
}