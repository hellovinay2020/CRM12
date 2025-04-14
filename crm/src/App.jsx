import Login from './AdminPanel/Login';
import Signup from './AdminPanel/Signup'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </Router>

  )
}

export default App
