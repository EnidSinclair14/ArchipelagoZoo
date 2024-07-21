import './App.css';
import './styles/font/lexend.css'; // Lexend Font Family
import './styles/font/poppins.css'; // Poppins Font Family
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/Home/HomePage';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
