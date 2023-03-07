import React from "react";
import { useState, useEffect } from "react";
import { Typography, Row, Col, Statistic } from 'antd'
import axios from "axios"

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
                setTotalMarketCap(data.stats.totalMarketCap)
                setTotalVolume(data.stats.total24hVolume)
                setTotalMarkets(data.stats.totalMarkets)
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <Typography.Title level={2} className="heading">Global Crypto Stats</Typography.Title>
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
        </div>
    )
}