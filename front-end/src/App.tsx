import { Routes, Route } from 'react-router-dom'

import Header from './components/global/header'
import Footer from './components/global/footer'
import Home from './pages/home'


function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>

    <Footer />
    </>
  )
}

export default App
