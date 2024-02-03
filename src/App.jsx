
import './App.css'

import Home from './pages/Home'
import Headon from './pages/Headon'
import Player from './pages/Player'
import BatRank from './pages/BatRank'
import BowlRank from './pages/BowlRank'
import Navbar from './components/Navbar'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (

    <>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/player' element={<Player />} />
          <Route path='/headon' element={<Headon />} />
          <Route path='/batrank' element={<BatRank />} />
          <Route path='/bowlrank' element={<BowlRank />} />
        </Routes>
      </div>
    </>
  )
}

export default App
