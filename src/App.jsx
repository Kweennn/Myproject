import {Route, Routes} from 'react-router-dom';
import './App.css';
import Hero from './components/hero';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/about-me" element={<AboutMe/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </div>
  )
}

export default App;
