import { Routes, Route } from 'react-router-dom'

import Header from './components/global/header'
import Footer from './components/global/footer'

import Home from './pages/home'
import Register from './pages/register'


function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>

    <Footer />
    </>
  )
}

export default App
