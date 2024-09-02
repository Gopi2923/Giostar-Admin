import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './components/Login/LoginPage'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  

  return (
   <Router>
    <Routes>
      <Route path='/' element = {<LoginPage />}/>
      <Route path='/dashboard' element = {<Dashboard />} />
    </Routes>
   </Router>
  )
}

export default App
