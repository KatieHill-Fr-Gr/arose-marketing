import './styles/layout.css'
import './styles/index.css'

import { Routes, Route } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import ProjectPage from './components/ProjectPage/ProjectPage'
import NotFound from './components/404NotFound/404NotFound'

function App() {

  return (
    <>
      <NavBar />
        <div className='page-container'>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/projects/:projectId' element={<ProjectPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
