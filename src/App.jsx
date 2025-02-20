import {Route, Routes} from 'react-router-dom';
import './App.css';
import Hero from './components/hero';
import Home from './pages/Home';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
