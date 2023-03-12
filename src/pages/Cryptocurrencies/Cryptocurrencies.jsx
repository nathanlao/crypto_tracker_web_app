import React, { useEffect, useState } from "react";
import { Row, Col, Card, Input } from "antd"
import { MoneyCollectOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
import axios from "axios";

import "./Cryptocurrencies.css"
import millify from "millify";

export default function Cryptocurrencies({ simplifiedCount, hideSearchBar }) {

    // Fetch only 10 crypto if simpifiedCount is true
    const topTen = simplifiedCount ? 10 : 100

    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h', 'tiers[0]': '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: `${topTen}`,
            offset: '0'
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_API_COIN_HOST
        }
    };

    const [coins, setCoins] = useState([])
    const [inputTerm, setInputTerm] = useState("")

    // Function to handle input change
    function handleSearchChange(event) {
        const { value } = event.target
        // console.log(value)
        setInputTerm(value)
    }

    useEffect(()=> {
        // Check empty input term
        if (inputTerm === "") {
            // First Fetch if no input 
            axios.request(options)
                .then((response) => {
                    const { data } = response.data
                    // console.log(data.coins)
                    setCoins(data.coins)
                })
                .catch((err) => console.log(err));
        } else {
            // Filter the coins if there is input search
            const filterCoins = coins.filter((coin) => {
                return coin.name.toLowerCase().includes(inputTerm.toLowerCase())
            })
    
            setCoins(filterCoins)
        }

    }, [inputTerm]) // Rerender depends on search input


    const coinsEl = coins.map(coin => {
        return (
            <Col xs={24} sm={12} lg={6} className="coin-card" key={`${coin.uuid}`}>
                <Link to={`/crypto/${coin.uuid}`}>
                    <Card 
                        title={`${coin.rank}. ${coin.name} (${coin.symbol})`}
                        extra={ 
                            <img 
                                className="coin-image"
                                alt={`icon of ${coin.id}`}
                                src={`${coin.iconUrl}`} />
                            }
                        hoverable={true}
                        >
                        <p>Price: {millify(coin.price)}</p>
                        <p>Listed At: {millify(coin.listedAt)}</p>
                        <p>24h Volume: {millify(coin['24hVolume'])}</p>
                        <p>Market Cap: {millify(coin.marketCap)}</p>
                        <p>Daily Change: {millify(coin.change)}%</p>
                    </Card>
                </Link>
            </Col>
        )
    })

    return (
        <>
            {   
                // Conditional render the search bar (hide it on home page)
                !hideSearchBar && (
                    <div className="search-crypto">
                        <Input
                            prefix={<MoneyCollectOutlined />}
                            placeholder="Search your cryptocurrency"
                            onChange={handleSearchChange}
                        />
                    </div>
                )
            }        
            <Row gutter={[24, 24]} className="coin-card-container">
                {/* xs: take up full width
                    sm: two per row  */}
                {coinsEl}
            </Row>
        </>
    )
}