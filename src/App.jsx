import React from 'react'
import Home from './Pages/Home'
import Carte from './Pages/Carte'
import { Route,Routes} from 'react-router-dom'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Carte" element={<Carte />} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App