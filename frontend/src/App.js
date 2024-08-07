import './App.css';
import './styles/font/lexend.css'; // Lexend Font Family
import './styles/font/poppins.css'; // Poppins Font Family
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Pages
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/Home/HomePage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Events from './pages/Events/Events';
import Animals from './pages/Animals/Animals';
import AnimalDetail from './components/animal/AnimalDetail';
import BookTicket from './pages/BookTicket/BookTicket';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('')
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    axios.interceptors.request.use(
      config => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }, []);

  return (
    <Router>
      {/* <Header /> */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} setUserId={setUserId}/> } />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/events" element={<Events />} />
        <Route path="/animals/" element={<Animals />} />
        <Route path="/animals/:animalName" element={<AnimalDetail />} />
        <Route path="/booking" element={<BookTicket userId={userId} />} />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
