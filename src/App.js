import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage/HomePage';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/portfolio" element={<h5>Portfolio</h5>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
