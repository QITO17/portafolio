import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Main from './Components/Main'
import Contact from './Components/Contact'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='conctat' element={<Contact />}/>
      <Route path='aboutme' element={<AboutMe />}/>
      <Route path='proj' element={<Projects />}/>
      <Route path='/*' element={<>Error</>} />
    </Routes>
      
    </>
  )
}

export default App
