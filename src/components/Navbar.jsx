import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from "../images/crypto.jpg"

export default function Navbar() {
    return (
        <div className="nav-container">
            <div className='logo-container'>
                <Avatar src={icon} size={80}/>
                <Typography.Title level={2} className="logo">
                    <Link to="/" className="link">Crypto Hub</Link>
                </Typography.Title>
            </div>
        </div>
    )
}

