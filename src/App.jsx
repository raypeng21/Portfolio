import Topbar from "./component/topbar/Topbar";
import Opening from "./component/opening/Opening";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio";
// import Testimonials from "./component/testimonials/Testimonials";
import Contact from "./component/contact/Contact";
import Menu from "./component/menu/Menu";
import "./app.scss";
import {useState} from "react" 

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
      <Contact/>
    </div>
      </div>
  );
}

export default App;
