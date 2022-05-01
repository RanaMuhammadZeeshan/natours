import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/homePage'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
