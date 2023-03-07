import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout.jsx'

import Home from './pages/Home/Home'
import Cryptocurrencies from './pages/Cryptocurrencies/Cryptocurrencies'
import CryptoDetails from './pages/CryptoDetails.jsx'
import News from './pages/News.jsx'

import "./App.css"

export default function App() {
    return (
        <div className='app'>
          <main className='main'>
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
          </main>
        </div>
    )
}
