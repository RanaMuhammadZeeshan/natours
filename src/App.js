import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'

import HomePage from './pages/homePage'

const App = () => {
  return (
    <React.Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </React.Fragment>
  )
}

export default App
