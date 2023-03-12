import React, { useEffect, useState } from "react";
import { Row, Col, Card, Typography, Avatar } from "antd"
import axios from "axios";
import moment from "moment";
import tempPic from "../../images/crypto.jpg"

import "./News.css"

export default function News( { simplifiedCount }) {

    const count = simplifiedCount ? 7 : 100

    const [news, setNews] = useState([])

    const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news/search',
        params: {
            safeSearch: 'Off', 
            textFormat: 'Raw',
            freshness: 'Day',
            count: `${count}`,
            q: 'crypto'
        },
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_API_NEWS_HOST
        }
    };

    useEffect(() => {
        axios.request(options)
            .then(response => {
                setNews(response.data.value)
            })
            .catch(err => console.log(err))
    }, [])

    const newsEl = news.map((singleNews, index) => {
        return (
            <Col xs={24} sm={12} lg={8} key={index}>
                <Card className="news-card" hoverable>
                    <a href={singleNews.url} target="_blank" rel="noreferrer">
                        <div className="news-image-container">
                            <Typography.Title className="news-title" level={4}>
                                {singleNews.name}
                            </Typography.Title>
                            <img 
                                alt="icon of news" 
                                src={singleNews?.image?.thumbnail?.contentUrl || tempPic}
                                className="news-img"
                            />
                        </div>
                        <p>
                            {singleNews.description.length > 200
                                ? `${singleNews.description.substring(0, 200)}...`
                                : singleNews.description
                            }
                        </p>
                        <div className="provider-container">
                            <div className="provider-title">
                                <Avatar 
                                    alt="icon of provider"
                                    src={singleNews?.provider[0]?.image?.thumbnail?.contentUrl || tempPic}     
                                />
                                <p className="provider-name">{singleNews?.provider[0].name}</p>
                            </div>
                            <p>{moment(singleNews.datePublished).startOf('ss').fromNow()}</p>
                        </div>
                    </a>
                </Card>
            </Col>
        )
    })

    return (
        <>
            <Row gutter={[24, 24]}>
                {newsEl}
            </Row>
        </>
    )
}