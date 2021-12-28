import Topbar from "./component/topbar/Topbar";
import Opening from "./component/opening/Opening";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio";
import Works from "./component/works/Works";
import Testimonials from "./component/testimonials/Testimonials";
import Contact from "./component/contact/Contact";
import Menu from "./component/menu/Menu";
import "./app.scss";
import {useState} from "react" 
import MouseParticles from 'react-mouse-particles'

function App() {
  const[menuOpen, setMenuOpen] =  useState(false)

  return (
    <div className="app">
    <Topbar menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Opening />
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
      <MouseParticles
          g={2.3}
          num={1}
          radius={8}
          life={0.8}
          v={1.2}
          color="random"
          alpha={0.16}
          level={6}
        />
    </div>
      </div>
  );
}

export default App;
