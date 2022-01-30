import './App.css';
import { Header } from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { Footer } from './Components/Footer/Footer';
import { ProjectsPage } from './pages/ProjectsPage/ProjectsPage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import AnimatedCursor from 'react-animated-cursor';

function App() {
  

  return (
    <BrowserRouter>
      <AnimatedCursor 
      innerSize={10}
      outerSize={60}
      color='225, 225, 225'
      outerAlpha={0.2}
      innerScale={2}
      outerScale={1.2}/>
      <Header/>
        <Routes>
          <Route path="/portfolio" element={<ProjectsPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/" element={<HomePage/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
