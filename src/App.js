import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout.jsx'

import Home from './pages/Home'
import Cryptocurrencies from './pages/Cryptocurrencies'
import CryptoDetails from './pages/CryptoDetails.jsx'
import News from './pages/News.jsx'

import "./App.css"

export default function App() {
    return (
        <div className='app'>
          <main className='main'>
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
          </main>
        </div>
    )
}
