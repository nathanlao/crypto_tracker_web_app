import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Typography, Space } from 'antd'

import Home from './components/Home'
import Cryptocurrencies from './components/Cryptocurrencies'
import CryptoDetails from './components/CryptoDetails.jsx'
import News from './components/News.jsx'

import Layout from './components/Layout.jsx'

export default function App() {
    return (
        <div className='app'>
          <div className='main'>
                <div className='routes'>
                    {/* Planning components to have: */}
                    {/* Nested routes to have UI (navbar) shared */}
                    <Routes>
                      <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        {/* Relative path */}
                        <Route path='cryptocurrencies' element={<Cryptocurrencies />} />
                        <Route path='crypto/:id' element={<CryptoDetails />} />
                        <Route path='news' element={<News />} />
                      </Route>
                    </Routes>
                </div>
          </div>
          <div className='footer'>

          </div>
        </div>
    )
}
