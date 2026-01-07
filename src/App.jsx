import './styles/index.css'
import './styles/layout.css'

import { Routes, Route } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import HomePage from './components/HomePage/HomePage'
import Footer from './components/Footer/Footer'
// import SingleProject from './components/SingleProject/SingleProject'
import NotFound from './components/404/404'

function App() {

  return (
    <>
      <Nav />
        <div className='page-container'>
      <Routes>
        <Route index element={<HomePage />} />
        {/* <Route path='/projects' element={<SingleProject />} /> */}
        <Route path="/404" element={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
