import './App.css';
import './styles/font/lexend.css'; // Lexend Font Family
import './styles/font/poppins.css'; // Poppins Font Family
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Navbar from './components/navbar/Navbar'; // Navbar
import HomePage from './pages/Home/HomePage'; // Home page
import Login from './pages/Auth/Login'; // Login page
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
