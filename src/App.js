import NavBar from "./components/NavBar";
import Sociallinks from "./components/Sociallinks";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/contact";
import Home2 from "./components/Home2";



function App() {
  return (
    <div>
      
      <NavBar />
      <Home />
      <Home2 />
      
      <Sociallinks/>
      
      <About/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
