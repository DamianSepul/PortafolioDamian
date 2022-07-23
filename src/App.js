import SideBar from "./components/sidebar/SideBar";
import "./stylesheets/App.css"
import Home from "./components/page-content/Home";
import AboutMe from "./components/page-content/AboutMe";
import Resume from "./components/page-content/Resume";
import Contact from "./components/page-content/Contact";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function App() {
  return (
    <div className="App">
      <header>
        <SideBar />
      </header>
      <Container fluid id="ContainerHome2">
      <Home />
            <AboutMe />
            <Resume />
            <Contact />
      </Container>
    </div>
  );
}

export default App;
