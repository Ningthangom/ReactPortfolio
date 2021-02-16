
import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Particles from "react-particles-js"
import Aboutme from "./components/Aboutme"
// import Services2 from "./components/Services_2"
import Services from "./components/Services"
import Projects from "./components/Project" 
import Services3 from "./components/Services_3"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <>
    <Particles
    className="particles-canvas"
            params={{
              particles: {
                  number: {
                    value: 30,
                    density: {
                      enable: true,
                      value_area: 600
                    }
                  },
                  shape: {
                    type: "star",
                    stroke: {
                      width: 7,
                      color: "#B22222"
                    }
                  }
                }
            }}
    
    />
        <Navbar/>
        <Header/>
        {/* <Aboutme/> */}
        {/* <Services2/> */}
        <Services3/>
        <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  );
}

export default App;
