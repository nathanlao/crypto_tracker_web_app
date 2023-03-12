import React, { useEffect } from "react";
import axios from "axios";

export default function News() {

    const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news',
        params: {
            safeSearch: 'Off', 
            textFormat: 'Raw',
            freshness: 'Day',
            limit: '10',
        },
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': '2276dec5d9msha4514d2a5f75692p1e5181jsnda7948426efb',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.request(options)
            .then(response => {
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <h1>News page here</h1>
    )
}