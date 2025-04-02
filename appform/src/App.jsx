import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './component/Forms'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payment from './page/Payment'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Forms />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
