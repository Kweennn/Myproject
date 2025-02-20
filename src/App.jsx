import "./App.css";
import Hero from "./components/hero";
import AboutMe from "./components/AboutMe";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
}

export default App;