import React from 'react'
import { Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, BulbOutlined, FundOutlined } from '@ant-design/icons'
import icon from "../../images/crypto.jpg"

import './Navbar.css'

export default function Navbar() {

    // Menu in antd: https://github.com/ant-design/pro-components/issues/5130
    const menuItems = [
        {
            key: 'home',
            icon: <HomeOutlined />,
            label: <Link to="/">Home</Link>
        },
        {
            key: 'cryptocurrencies',
            icon: <FundOutlined />,
            label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        },
        {
            key: 'news',
            icon: <BulbOutlined />,
            label: <Link to='/news'>News</Link>,
        },
    ];

    return (
        <nav className="nav-container">
            <div className='logo-container'>
                <Avatar src={icon} size={80}/>
                <Typography.Title level={2} className="logo">
                    <Link to="/" className="link">Crypto Hub</Link>
                </Typography.Title>
            </div>
            <Menu items={menuItems} />
        </nav>
    )
}

