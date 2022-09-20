
import './App.css';
import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Mainpage/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
