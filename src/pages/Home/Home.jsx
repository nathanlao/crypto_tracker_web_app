import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { Typography, Row, Col, Statistic } from 'antd'
import millify from "millify";
import axios from "axios"

import "./Home.css"
import Cryptocurrencies from "../Cryptocurrencies/Cryptocurrencies";
import News from "../News";

export default function Home() {

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

    const [totalCrypto ,setTotalCrypto] = useState([])
    const [totalExchanges, setTotalExchanges] = useState([])
    const [totalMarketCap, setTotalMarketCap] = useState([])
    const [totalVolume, setTotalVolume] = useState([])
    const [totalMarkets, setTotalMarkets] = useState([])

    useEffect(() => {
        axios.request(options)
            .then((response) => {
                const { data } = response.data
                // console.log(data)
                setTotalCrypto(data.stats.totalCoins)
                setTotalExchanges(data.stats.totalExchanges)
                setTotalMarketCap(millify(data.stats.totalMarketCap))
                setTotalVolume(millify(data.stats.total24hVolume))
                setTotalMarkets(data.stats.totalMarkets)
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <Typography.Title level={2} className="heading">
                Global Crypto Stats
            </Typography.Title>
            <Row>
                <Col span={12}>
                    <Statistic title="Total Cryptocurrencies" value={totalCrypto}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Exchanges" value={totalExchanges}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Market Cap" value={totalMarketCap}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total 24h Volume" value={totalVolume}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Markets" value={totalMarkets}/>
                </Col>
            </Row>
            <div className="home-header-container">
                <Typography.Title level={2}>
                    Top 10 Cryptocurrencies in the world
                </Typography.Title>
                <Typography.Title level={3} className="show-more">
                    <Link to="/cryptocurrencies">Show More</Link>
                </Typography.Title>
            </div>
            <Cryptocurrencies />
            <div className="home-header-container">
                <Typography.Title level={2}>
                    Lastest Crypto News
                </Typography.Title>
                <Typography.Title level={3} className="show-more">
                    <Link to="/news">Show More</Link>
                </Typography.Title>
            </div>
            <News />
        </div>
    )
}