import './App.css';
import './styles/lexend.css'; // Lexend Font Family
import './styles/poppins.css'; // Poppins Font Family
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/Home/HomePage';
// import AboutPage from './pages/AboutPage';
// import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      {/* <Header /> */}
      {/* <div> */}
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
