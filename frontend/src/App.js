import './App.css';
import './styles/font/lexend.css'; // Lexend Font Family
import './styles/font/poppins.css'; // Poppins Font Family
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Pages
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/Home/HomePage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Events from './pages/Events/Events';
import Animals from './pages/Animals/Animals';
import BookTicket from './pages/BookTicket/BookTicket';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('access_token');
  //   if (token) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  return (
    <Router>
      {/* <Header /> */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} /> } />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/events" element={<Events />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/booking" element={<BookTicket />} />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
