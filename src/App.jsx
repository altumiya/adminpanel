import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Login from './components/pages/common/login'
import Layout from './components/pages/common/layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
       
        <Route path='/dashboard' element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
