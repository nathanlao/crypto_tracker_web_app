import React, { useEffect, useState } from "react";
import { Row, Col, Card, Typography, Avatar } from "antd"
import axios from "axios";
import moment from "moment";
import tempPic from "../../images/crypto.jpg"

import "./News.css"

export default function News( { simplifiedCount }) {

    const count = simplifiedCount ? 6 : 100

    const [news, setNews] = useState([])

    const options = {
        method: 'GET',
        url: 'https://real-time-news-data.p.rapidapi.com/search',
        params: {
            query: 'crypto',
            country: 'US',
            lang: 'en'
        },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_API_NEWS_HOST
        }
    };

    useEffect(() => {
        axios.request(options)
            .then(response => {
                setNews(response.data.data)
            })
            .catch(err => console.log(err))
    }, [])

    const newsEl = news.slice(0, count).map((singleNews, index) => {
        return (
            <Col xs={24} sm={12} lg={8} key={index}>
                <Card className="news-card" hoverable>
                    <a href={singleNews.link} target="_blank" rel="noreferrer">
                        <div className="news-image-container">
                            <Typography.Title className="news-title" level={4}>
                                {singleNews.title}
                            </Typography.Title>
                            <img 
                                alt="icon of news" 
                                src={singleNews?.photo_url || tempPic}
                                className="news-img"
                            />
                        </div>
                        {/* <p>
                            {singleNews.description.length > 200
                                ? `${singleNews.description.substring(0, 200)}...`
                                : singleNews.description
                            }
                        </p> */}
                        <div className="provider-container">
                            <div className="provider-title">
                                <Avatar 
                                    alt="icon of provider"
                                    src={singleNews?.source_logo_url || tempPic}     
                                />
                                <p className="provider-name">{singleNews?.source_url}</p>
                            </div>
                            <p>{moment(singleNews.published_datetime_utc).startOf('ss').fromNow()}</p>
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