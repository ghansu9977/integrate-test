import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Test from './component/Test'

function App() {

  return (
    <>
      <Router basename='/react'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/test' element={<Test/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
