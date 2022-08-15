import Navbar from "./component/navbar"
import Home from "./component/home"
import About from "./component/about"
import Exp from "./component/exp"
import Contact from "./component/contact"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="experience" element={ <Exp/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
