

import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/about";
import Info from "./components/about/Info";
import Skills from "./components/skills/Skills";
import Qualifications from "./components/qualifications/Qualifications";
import Projects from "./components/Projects/Projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Home/>
      <About/>
      <Skills/>
      
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
    
  
}

export default App;
