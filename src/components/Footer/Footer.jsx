import React from "react";
import { Typography, Space } from "antd";
import { Link } from "react-router-dom";

import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <Typography.Paragraph strong={true} level={5} style={{color: "white"}}>
                Nathan Development @2023<br />
                All rights reserved
            </Typography.Paragraph>
            <Space className="footer-link">
                <Link to="/">Home</Link>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                <Link to="/news">News</Link>
            </Space>
        </div>
    )
}